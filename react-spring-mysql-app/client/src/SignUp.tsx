import { useState } from 'react';
import { User, Mail, Phone, Eye, EyeOff } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/39b6269214ec5f8a015cd1f1a1adaa157fd5d025.png';

interface SignUpProps {
  onSwitchToSignIn: () => void;
}

export default function SignUp({ onSwitchToSignIn }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role: ''
  });
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const availableSubjects = [
    'Software Engineering',
    'Computer Science',
    'Marketing',
    'Management',
    'IT',
    'IoT',
    'Distributed Systems'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Selected subjects:', selectedSubjects);
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.role) {
      alert('Please select a role!');
      return;
    }
    
    if (formData.role === 'staff' && selectedSubjects.length === 0) {
      alert('Please select at least one preferred subject!');
      return;
    }
    
    // Handle registration logic here
    alert('Sign up successful!');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subject)) {
        return prev.filter(s => s !== subject);
      } else {
        return [...prev, subject];
      }
    });
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
            Create Your Account
          </h1>
          <p className="text-[#555555]" style={{ fontSize: '14px' }}>
            Sign up to access the Temporary Staff Coordination System
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#555555]">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#999999]" />
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className="pl-10 border border-[#e0e0e0] rounded-xl h-12 focus:border-[#4db4ac] focus:ring-1 focus:ring-[#4db4ac] transition-colors"
                required
              />
            </div>
          </div>

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

          {/* Mobile Number */}
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-[#555555]">Mobile Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#999999]" />
              <Input
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={(e) => handleChange('mobile', e.target.value)}
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
                placeholder="Create a password"
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

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[#555555]">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                className="pr-10 border border-[#e0e0e0] rounded-xl h-12 focus:border-[#4db4ac] focus:ring-1 focus:ring-[#4db4ac] transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#999999] hover:text-[#4db4ac] transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Role Selection */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-[#555555]">Role</Label>
            <Select value={formData.role} onValueChange={(value) => handleChange('role', value)} required>
              <SelectTrigger className="border border-[#e0e0e0] rounded-xl h-12 focus:border-[#4db4ac] focus:ring-1 focus:ring-[#4db4ac] transition-colors">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hod">Head of Department</SelectItem>
                <SelectItem value="coordinator">Temporary Staff Coordinator</SelectItem>
                <SelectItem value="mentor">Senior Lecturer (Mentor)</SelectItem>
                <SelectItem value="staff">Temporary Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Preferred Subjects - Only for Temporary Staff */}
          {formData.role === 'staff' && (
            <div className="space-y-3 pt-2">
              <Label className="text-[#555555]">Preferred Subjects</Label>
              <div className="border border-[#e0e0e0] rounded-xl p-4 bg-[#f9f9f9]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableSubjects.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject}
                        checked={selectedSubjects.includes(subject)}
                        onCheckedChange={() => handleSubjectToggle(subject)}
                        className="border-[#4db4ac] data-[state=checked]:bg-[#4db4ac] data-[state=checked]:border-[#4db4ac]"
                      />
                      <label
                        htmlFor={subject}
                        className="text-[#555555] cursor-pointer"
                        style={{ fontSize: '14px' }}
                      >
                        {subject}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#4db4ac] hover:bg-[#3c9a93] text-white rounded-xl shadow-md transition-all duration-200 mt-6"
          >
            Sign Up
          </Button>
        </form>

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-[#555555]" style={{ fontSize: '14px' }}>
            Already signed up?{' '}
            <button 
              onClick={onSwitchToSignIn}
              className="text-[#4db4ac] hover:underline" 
              style={{ fontWeight: 700 }}
            >
              Sign In
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