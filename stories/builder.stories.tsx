import { ReactFlowProvider } from "@xyflow/react";
import { QueryBuilder, QueryBuilderContext } from "../src/index";
import "./style.css";

function QueryBuilderComponent() {
  return (
    <ReactFlowProvider>
      <QueryBuilderContext.Provider
        value={{
          nodeDefinitions: [{ id: "gene", name: "Gene", category: "VIP" }],
          edgeDefinitions: [],
        }}
      >
        <QueryBuilder nodes={[]} edges={[]} onSubmit={() => {}} />
      </QueryBuilderContext.Provider>
    </ReactFlowProvider>
  );
}

export default {
  title: "QueryBuilderComponent",
  component: QueryBuilderComponent,
};

export const Primary = {};
