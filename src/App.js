import React from "react";
import TabBar from "./lib/TabBar";
import TabBarWithRender from "./lib/TabBarWithRender";
import "./styles.css";

export default function App() {
    return (
        <>
            <TabBar tabs={["Tab One", "Tab Two", "Tab Three"]}/>

            <TabBarWithRender
                tabs={[
                    {title: "Tab One", render: () => <h2>Content One</h2>},
                    {title: "Tab Two", render: () => <h2>Content Two</h2>},
                    {title: "Tab Three", render: () => <h2>Content Three</h2>}
                ]}
            />
        </>
    );
}
