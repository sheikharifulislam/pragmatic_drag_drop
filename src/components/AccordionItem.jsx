import { draggable, dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";
import { useEffect, useRef } from "react";
var Panel = Collapse.Panel;

import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";

function AccordionItem({ item, children }) {
    const elRef = useRef(null);
    useEffect(() => {
        if (item.type !== "body") {
            return combine(
                draggable({
                    element: elRef.current,
                    getInitialData: () => item,
                }),
                dropTargetForElements({
                    element: elRef.current,
                    onDrop: ({ location, self }) => {
                        if (location.current.dropTargets[0]?.element === self.element) {
                            console.log("from dropTargetForElements", item);
                            return;
                        }
                    },
                })
            );
        }
    }, []);

    return (
        <div {...{ ...(item.type !== "body" ? { ref: elRef } : {}) }}>
            {children ? (
                <Collapse accordion={true}>
                    <Panel header={`${item.name} - ${item.id}`}>{children}</Panel>
                </Collapse>
            ) : (
                <p>{`${item.name}-${item.id}`}</p>
            )}
        </div>
    );
}

export default AccordionItem;
