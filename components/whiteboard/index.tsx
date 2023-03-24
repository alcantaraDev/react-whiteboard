import { useCallback } from 'react'
import ReactFlow, { addEdge, Background, Connection, ConnectionMode, Controls, Node, useEdgesState, useNodesState } from 'reactflow'
import 'reactflow/dist/style.css'
import {zinc} from 'tailwindcss/colors'

import { DefaultEsge } from './edges/defultEdge'
import { TestNode } from './nodes/input'

const nodeTypes = {
    test: TestNode,
}

const edgeTypes = {
    default: DefaultEsge,
}

const initialNodes = [
    {
        id: "1",
        type: "test",
        position: {x:200, y:400},
        data: {},
    },
    {
        id: "2",
        type: "test",
        position: {x:800, y:400},
        data: {},
    }
] satisfies Node[]

export function Whiteboard() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    const onConnect = useCallback((connection: Connection) => {
        setEdges(edges => addEdge(connection, edges))
    }, [])

    return (
        <div className='w-screen h-screen'>
            <ReactFlow
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            connectionMode={ConnectionMode.Loose}
            defaultEdgeOptions={{type: "default"}}
            >
                <Background
                gap={20}
                color={zinc[500]}
                />
                {/* <Controls/> */}
            </ReactFlow>
        </div>
    )
}