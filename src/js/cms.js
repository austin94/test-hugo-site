import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import BurgerPreview from "./cms-preview-templates/burger";
import BurgersPreview from "./cms-preview-templates/burgers";
import ContactPreview from "./cms-preview-templates/contact";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("burger", BurgerPreview);
CMS.registerPreviewTemplate("burgers", BurgersPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerWidget("color", ColorControl);
