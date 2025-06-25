import { Button } from "@/components/ui/button"

interface GenerateButtonProps {
  disabled: boolean
  onGenerate: () => void
  isLoading?: boolean
  error?: string
}

export default function GenerateButton({ disabled, onGenerate, isLoading = false, error }: GenerateButtonProps) {
  return (
    <>
      <Button
        onClick={onGenerate}
        disabled={disabled || isLoading}
        className="w-full h-16 mb-6 text-xl font-black bg-[#00CECB] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "GENERATING..." : "GENERATE SIGNATURE"}
      </Button>
      {error && (
        <div className="mb-6 p-4 bg-red-100 border-4 border-red-500 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
          <p className="text-red-700 font-bold">{error}</p>
        </div>
      )}
    </>
  )
}