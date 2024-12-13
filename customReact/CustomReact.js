const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const customRender = (reactElement, mainContainer)=>{
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendchild(reactElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (let prop in reactElement.props) {
        if(prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props.prop);
    }
    Container.appendChild(domElement);
}   

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer) 
