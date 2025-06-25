import { ApiEndpoint } from "../../types/api"

interface EndpointDetailsProps {
  selectedEndpoint: ApiEndpoint
  currentPath: string
}

export default function EndpointDetails({ selectedEndpoint, currentPath }: EndpointDetailsProps) {
  return (
    <div className="mb-6 p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-xl font-bold mb-2 bg-[#FFED66] px-2 border-2 border-black inline-block">
        Endpoint Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
        <div className="bg-[#00CECB] p-2 border-2 border-black">
          <span className="font-bold">Method: </span>
          {selectedEndpoint.method}
        </div>
        <div className="md:col-span-2 bg-[#FF5E5B] p-2 border-2 border-black overflow-auto">
          <span className="font-bold">Path: </span>
          <code className="break-all font-mono">{currentPath}</code>
        </div>
      </div>
    </div>
  )
}