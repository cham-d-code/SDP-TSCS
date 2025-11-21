import { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/39b6269214ec5f8a015cd1f1a1adaa157fd5d025.png';

type UserRole = 'hod' | 'coordinator' | 'mentor' | 'staff';

interface SignInProps {
  onSwitchToSignUp: () => void;
  onSignIn: (role: UserRole) => void;
  onForgotPassword: () => void;
}

export default function SignIn({ onSwitchToSignUp, onSignIn, onForgotPassword }: SignInProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '' as UserRole | '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in submitted:', formData);
    
    // Validate form
    if (!formData.email || !formData.password) {
      alert('Please enter email and password!');
      return;
    }
    
    if (!formData.role) {
      alert('Please select your role!');
      return;
    }
    
    // Handle sign in logic here
    onSignIn(formData.role as UserRole);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#4db4ac] opacity-[0.08]"></div>
        
        {/* Bottom Left Circle */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#4db4ac] opacity-[0.06]"></div>
        
        {/* Top Left Small Circle */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#4db4ac] opacity-[0.1]"></div>
        
        {/* Bottom Right Rectangle */}
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-[#4db4ac] opacity-[0.05] rotate-45 rounded-3xl"></div>
        
        {/* Center Top Rectangle */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-20 bg-[#4db4ac] opacity-[0.07] rounded-full"></div>
      </div>

      <Card className="w-full max-w-md p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-xl bg-white border-0 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <ImageWithFallback src={logo} alt="Department Logo" className="h-20 w-auto" />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[#222222] mb-2" style={{ fontWeight: 700 }}>
            Welcome Back
          </h1>
          <p className="text-[#555555]" style={{ fontSize: '14px' }}>
            Sign in to access the Temporary Staff Coordination System
          </p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Academic Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#555555]">Academic Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#999999]" />
              <Input
                id="email"
                type="email"
                placeholder="name@kln.ac.lk"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="pl-10 border border-[#e0e0e0] rounded-xl h-12 focus:border-[#4db4ac] focus:ring-1 focus:ring-[#4db4ac] transition-colors"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#555555]">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className="pr-10 border border-[#e0e0e0] rounded-xl h-12 focus:border-[#4db4ac] focus:ring-1 focus:ring-[#4db4ac] transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#999999] hover:text-[#4db4ac] transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-[#555555]">Role</Label>
            <Select
              value={formData.role}
              onValueChange={(value) => handleChange('role', value as UserRole | '')}
            >
              <SelectTrigger className="border border-[#e0e0e0] rounded-xl h-12 focus:border-[#4db4ac] focus:ring-1 focus:ring-[#4db4ac] transition-colors">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="border border-[#e0e0e0] rounded-xl focus:border-[#4db4ac] focus:ring-1 focus:ring-[#4db4ac] transition-colors">
                <SelectItem value="hod">Head of Department</SelectItem>
                <SelectItem value="coordinator">Coordinator</SelectItem>
                <SelectItem value="mentor">Mentor</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => handleChange('rememberMe', checked as boolean)}
                className="border-[#e0e0e0] data-[state=checked]:bg-[#4db4ac] data-[state=checked]:border-[#4db4ac]"
              />
              <label
                htmlFor="rememberMe"
                className="text-[#555555] cursor-pointer"
                style={{ fontSize: '14px' }}
              >
                Remember me
              </label>
            </div>
            <button 
              type="button"
              onClick={onForgotPassword}
              className="text-[#4db4ac] hover:underline"
              style={{ fontSize: '14px', fontWeight: 600 }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#4db4ac] hover:bg-[#3c9a93] text-white rounded-xl shadow-md transition-all duration-200 mt-6"
          >
            Sign In
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-[#555555]" style={{ fontSize: '14px' }}>
            Don't have an account?{' '}
            <button 
              onClick={onSwitchToSignUp}
              className="text-[#4db4ac] hover:underline" 
              style={{ fontWeight: 700 }}
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-[#e0e0e0]">
          <p className="text-[#999999]" style={{ fontSize: '12px' }}>
            University of Kelaniya | Temporary Staff Coordination System
          </p>
        </div>
      </Card>
    </div>
  );
}