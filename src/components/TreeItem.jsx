import React from "react";
import pageData from "../data/data";
import AccordionItem from "./AccordionItem";

const renderChildren = (children) => {
    if (!children) return null;
    return children.map((itemId) => <TreeItem key={itemId} item={pageData.data.content[itemId]} />);
};

const TreeItem = ({ itemId, item }) => {
    return (
        <div>
            <AccordionItem item={item}>{renderChildren(item.children)}</AccordionItem>
        </div>
    );
};

export default TreeItem;
