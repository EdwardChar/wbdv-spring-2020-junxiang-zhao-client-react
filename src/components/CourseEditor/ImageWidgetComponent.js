import React from "react";

class ImageWidgetComponent extends React.Component {

    state = {
        src: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
    }

    render() {
        return (
            <div>
                <h2>Image widget</h2>
                <input type="text" placeholder="Image link" className="w-100 my-3"
                    onChange={(e)=>this.setState({
                        src: e.target.value
                    })}/>

                <input type="text" placeholder="Widget Name" className="w-100 my-3" />
                <h3>Preview</h3>
                <img src={this.state.src} alt="Image widget"/>
            </div>
        )
    }
}

export default ImageWidgetComponent;
