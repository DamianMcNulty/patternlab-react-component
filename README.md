**Under development**

# patternlab-react-component
> React.Component extension for use with [patternlab-react](https://github.com/peteyg99/patternlab-react)

## Usage

### Install

```
npm install patternlab-react
```

## Extend component

### Basic

Extend your react component to add a description etc.

```
import React from 'react';
import { PatternLabComponent } from '@peteyg/patternlab-react-component';

export default class MyComponent extends PatternLabComponent {
    render() {
        return (
            <div>
                MyComponent
            </div>
        )
    }
}
```

### Advanced

```
import React from 'react';
import { PatternLabComponent } from '@peteyg/patternlab-react-component';

class MyComponent extends PatternLabComponent {
    static getTitle() {
        return "Foo";
    }
    static getDescription() {
        return "Bar";
    }
    render() {
        return (
            <div>
                {this.props.myProp}
            </div>
        )
    }
}

MyComponent.propTypes = {
    myProp: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ])
}

MyComponent.describePropTypes = {
    myProp: {
        type: "oneOfType(string, object)",
        isRequired: true
    }
}

MyComponent.fakeProps = {
    myProp: "Lorem ipsum"
}

export default MyComponent
```


### Extendable methods

- getTitle()
- getDescription()


### Extendable properties

#### describePropTypes

Currently some fileTypes are not discoverable so need to be 
described. Hopefully deprecate this in the future.

#### fakeProps

Set prop values that will only be displayed in the style guide.
Useful for required props that have no default value.