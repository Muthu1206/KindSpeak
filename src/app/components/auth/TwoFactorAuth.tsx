import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { toast } from 'sonner';

export default function TwoFactorAuth() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if (code.length === 6) {
      toast.success('Verification successful!');
      navigate('/dashboard');
    } else {
      toast.error('Please enter the complete 6-digit code');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="space-y-4 pb-8">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-2xl relative">
              <Shield className="w-8 h-8 text-white" />
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          <CardTitle className="text-3xl text-center">Two-Factor Authentication</CardTitle>
          <CardDescription className="text-center text-base">
            Enter the 6-digit code sent to your device
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={code} onChange={setCode}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className="w-12 h-14 text-lg" />
                <InputOTPSlot index={1} className="w-12 h-14 text-lg" />
                <InputOTPSlot index={2} className="w-12 h-14 text-lg" />
                <InputOTPSlot index={3} className="w-12 h-14 text-lg" />
                <InputOTPSlot index={4} className="w-12 h-14 text-lg" />
                <InputOTPSlot index={5} className="w-12 h-14 text-lg" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button
            onClick={handleVerify}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Verify Code
          </Button>

          <div className="text-center space-y-2">
            <button
              type="button"
              onClick={() => toast.info('New code sent!')}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Didn't receive the code? Resend
            </button>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              The code will expire in 5 minutes
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
