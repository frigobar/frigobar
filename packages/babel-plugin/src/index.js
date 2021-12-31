const syntax = require('@babel/plugin-syntax-jsx').default;

const ANIMATION_PROP = 'animation';
const ANIMATION_CSS_RULE = 'animation';

function plugin(babel) {
  const { types } = babel;

  function generateExpressionStatements(expression) {
    console.log(expression.elements);
    return Array.from({ length: expression.elements.length || 1 }).map(
      (_, index) => {
        return types.expressionStatement(
          types.callExpression(expression.elements[index], [
            types.identifier('ref'),
          ]),
        );
      },
    );
  }

  function animationAndRefProp(path, animationProp, refProp) {
    if (animationProp.value && refProp.value) {
      const multipleAnimations = types.isArrayExpression(
        animationProp.value.expression,
      );
      const newProp = types.jSXAttribute(
        types.jSXIdentifier('ref'),
        types.jSXExpressionContainer(
          types.arrowFunctionExpression(
            [types.identifier('ref')],
            types.blockStatement([
              types.expressionStatement(
                types.callExpression(animationProp.value.expression, [
                  types.identifier('ref'),
                ]),
              ),
              types.expressionStatement(
                types.assignmentExpression(
                  '=',
                  types.memberExpression(
                    refProp.value.expression,
                    types.identifier('current'),
                  ),
                  types.identifier('ref'),
                ),
              ),
            ]),
          ),
        ),
      );

      const newAttributes = path.node.attributes.filter(
        node =>
          node.name &&
          node.name.name !== ANIMATION_PROP &&
          node.name.name !== 'ref',
      );

      newAttributes.push(newProp);
      // eslint-disable-next-line no-param-reassign
      path.node.attributes = newAttributes;
    }
  }

  function onlyAnimationProp(path, animationProp) {
    if (animationProp.value) {
      const multipleAnimations = types.isArrayExpression(
        animationProp.value.expression,
      );

      const newProp = types.jSXAttribute(
        types.jSXIdentifier('ref'),
        types.jSXExpressionContainer(
          types.arrowFunctionExpression(
            [types.identifier('ref')],
            types.blockStatement(
              [
                multipleAnimations
                  ? generateExpressionStatements(animationProp.value.expression)
                  : types.expressionStatement(
                      types.callExpression(animationProp.value.expression, [
                        types.identifier('ref'),
                      ]),
                    ),
              ]
                .filter(t => t)
                .flat(),
            ),
          ),
        ),
      );

      const newAttributes = path.node.attributes.filter(
        node =>
          node.name &&
          node.name.name !== ANIMATION_PROP &&
          node.name.name !== 'ref',
      );

      newAttributes.push(newProp);
      // eslint-disable-next-line no-param-reassign
      path.node.attributes = newAttributes;
    }
  }

  return {
    inherits: syntax,

    visitor: {
      Program(programPath) {
        programPath.traverse({
          JSXOpeningElement(path) {
            if (path.node.attributes) {
              const animationProp = path.node.attributes.find(
                node => node.name && node.name.name === ANIMATION_PROP,
              );

              const refProp = path.node.attributes.find(
                node => node.name && node.name.name === 'ref',
              );

              if (animationProp && refProp) {
                animationAndRefProp(path, animationProp, refProp);
              } else if (animationProp && !refProp) {
                onlyAnimationProp(path, animationProp);
              }
            }
          },
        });
      },
    },
  };
}

module.exports = plugin;
