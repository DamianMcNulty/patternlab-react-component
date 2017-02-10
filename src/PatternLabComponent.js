import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import reactToJsx from 'react-to-jsx'

class PatternLabComponent extends React.PureComponent {
    static getDescription() {
        return "[Insert description here]"
    }

    static getTitle() {
        return this.name
    }

    static getAnnotations() {
        return
    }

    _getProps() {
        return {
            ...this.props,
            ...this.constructor.defaultProps,
        }
    }

    _setFakeProps() {
        this.props = {
            ...this.props,
            ...this.constructor.fakeProps
        }
    }

    getHtml() {
        this.props = this._getProps()
        let markup = this.render()
        if (!markup) {
            this._setFakeProps()
            markup = this.render()
        }
        return markup ? renderToStaticMarkup(markup) : "N/A" // TODO: fill props using proptypes array?
    }

    getJsx() {
        this.props = this._getProps()
        let markup = this.render()
        if (!markup) {
            this._setFakeProps()
            markup = this.render()
        }
        return markup ? reactToJsx(markup) : "N/A" // TODO: fill props using proptypes array?
    }

    getDefProps() {
        return this.constructor.defaultProps
    }

    getPropTypes() {
        const propTypes = this.constructor.propTypes
        if (!propTypes) return 
        const descPropTypes = this.constructor.describePropTypes
    
        let returnPropTypes = {}
        Object.keys(propTypes).forEach(propKey => {

            let propTypeDescription = {
                type: 'unknown',
                isRequired: 'unknown'                
            }

            if (descPropTypes && descPropTypes[propKey]) {
                // Get manually set description
                propTypeDescription = descPropTypes[propKey]
            }
            else
            {
                // Try to calculate description
                const propType = Object.keys(React.PropTypes).find(propTypeKey => {
                    return React.PropTypes[propTypeKey] == propTypes[propKey]
                        || React.PropTypes[propTypeKey].isRequired == propTypes[propKey]
                })
                if (propType)
                    propTypeDescription = {
                        type: propType,
                        isRequired: React.PropTypes[propType].isRequired == propTypes[propKey]
                    }
            }

            // Add description to return object
            returnPropTypes[propKey] = propTypeDescription
        })
        return returnPropTypes
    }
}

PatternLabComponent.describePropTypes = {}
PatternLabComponent.fakeProps = {}

export default PatternLabComponent