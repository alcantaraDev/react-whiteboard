import { Handle, NodeProps, Position } from "reactflow";

export function TestNode({}: NodeProps) {
    return (
        <div className="w-[250px] h-[250px] bg-violet-600 rounded-lg">
            <Handle 
            id="right" 
            position={Position.Right} 
            type="target"
            className="-right-5 w-3 h-3 bg-blue-400/80"
            />
            <Handle 
            id="left" 
            position={Position.Left} 
            type="source"
            className="-left-5 w-3 h-3 bg-blue-400/80"
            />
        </div>
    )
}