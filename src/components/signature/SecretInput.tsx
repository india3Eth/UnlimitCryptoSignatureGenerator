import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SecretInputProps {
  secret: string
  onSecretChange: (value: string) => void
  error?: string
}

export default function SecretInput({ secret, onSecretChange, error }: SecretInputProps) {
  return (
    <div className="mb-8">
      <div className="space-y-2 mb-6">
        <Label htmlFor="secret" className="text-xl font-bold">API Secret</Label>
        <Input
          id="secret"
          type="password"
          value={secret}
          onChange={(e) => onSecretChange(e.target.value)}
          placeholder="Enter your Secret Key"
          className={`border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg p-4 font-mono ${
            error ? 'border-red-500' : 'border-black'
          }`}
        />
        {error && (
          <p className="text-red-600 text-sm font-bold bg-red-100 px-2 py-1 border-2 border-red-500">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}