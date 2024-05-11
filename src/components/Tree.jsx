import pageData from "../data/data";
import TreeItem from "./TreeItem";

const Tree = () => {
    return (
        <div>
            {pageData.data.content.root.children.map((itemId) => (
                <TreeItem key={itemId} item={pageData.data.content[itemId]} />
            ))}
        </div>
    );
};

export default Tree;
