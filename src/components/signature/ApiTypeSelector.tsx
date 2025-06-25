import { memo } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ApiType } from "../../types/api"

interface ApiTypeSelectorProps {
  selectedApiType: ApiType | ""
  onApiTypeChange: (value: string) => void
}

function ApiTypeSelector({ selectedApiType, onApiTypeChange }: ApiTypeSelectorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="apiType" className="text-xl font-bold">API Type</Label>
      <Select onValueChange={onApiTypeChange} value={selectedApiType}>
        <SelectTrigger className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg h-14">
          <SelectValue placeholder="Select API type" />
        </SelectTrigger>
        <SelectContent className="border-4 border-black">
          <SelectItem value="normal" className="text-lg cursor-pointer hover:bg-[#00CECB]">
            Normal API
          </SelectItem>
          <SelectItem value="whitelabel" className="text-lg cursor-pointer hover:bg-[#FF5E5B]">
            White Label API
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default memo(ApiTypeSelector)