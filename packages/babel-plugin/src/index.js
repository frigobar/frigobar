const syntax = require('@babel/plugin-syntax-jsx').default;

const ANIMATION_PROP = 'animation';
const ANIMATION_CSS_RULE = 'animation';

function plugin(babel) {
  const { types } = babel;

  function generateCommaTemplateElement(times) {
    return Array.from({ length: times - 1 }).fill(
      types.templateElement({ raw: ',', cooked: ',' }, false),
    );
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

              if (animationProp && animationProp.value) {
                const multipleAnimations = types.isArrayExpression(
                  animationProp.value.expression,
                );

                const newProp = types.jSXAttribute(
                  types.jSXIdentifier('css'),
                  types.jSXExpressionContainer(
                    types.templateLiteral(
                      [
                        types.templateElement(
                          {
                            raw: `${ANIMATION_CSS_RULE}: `,
                            cooked: `${ANIMATION_CSS_RULE}: `,
                          },
                          false,
                        ),
                        multipleAnimations &&
                          generateCommaTemplateElement(
                            animationProp.value.expression.elements.length,
                          ),
                        types.templateElement({ raw: ';', cooked: ';' }, true),
                      ]
                        .filter(t => t)
                        .flat(),
                      multipleAnimations
                        ? [...animationProp.value.expression.elements]
                        : [animationProp.value.expression],
                    ),
                  ),
                );

                const newAttributes = path.node.attributes.filter(
                  node => node.name && node.name.name !== ANIMATION_PROP,
                );

                newAttributes.push(newProp);
                // eslint-disable-next-line no-param-reassign
                path.node.attributes = newAttributes;
              }
            }
          },
        });
      },
    },
  };
}

module.exports = plugin;
