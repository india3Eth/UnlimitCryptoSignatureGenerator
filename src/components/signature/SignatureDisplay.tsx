import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

interface SignatureDisplayProps {
  signature: string
  copied: boolean
  onCopyToClipboard: () => void
}

export default function SignatureDisplay({ signature, copied, onCopyToClipboard }: SignatureDisplayProps) {
  if (!signature) return null

  return (
    <div className="p-6 bg-[#FFED66] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-black border-b-4 border-black">SIGNATURE</h2>
        <Button 
          onClick={onCopyToClipboard} 
          variant="outline" 
          className="bg-white border-2 border-black hover:bg-gray-100"
        >
          {copied ? "COPIED!" : <Copy className="h-5 w-5" />}
        </Button>
      </div>
      <p className="break-all font-mono text-lg bg-white p-4 border-2 border-black">{signature}</p>
    </div>
  )
}