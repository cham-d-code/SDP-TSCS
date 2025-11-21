import { useState } from 'react';
import { Calendar, Users, Mail, Phone, FileText, Edit, Plus, Play, ArrowLeft, Eye } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  cvUrl?: string;
}

interface HodManageInterviewsPageProps {
  onBack: () => void;
}

export default function HodManageInterviewsPage({ onBack }: HodManageInterviewsPageProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Mock upcoming interview candidates
  const upcomingInterviewCandidates: Candidate[] = [
    {
      id: 'C001',
      name: 'K.M. Silva',
      email: 'km.silva@gmail.com',
      phone: '+94 77 123 4567',
      cvUrl: '#'
    },
    {
      id: 'C002',
      name: 'R.P. Fernando',
      email: 'rp.fernando@gmail.com',
      phone: '+94 76 234 5678',
      cvUrl: '#'
    },
    {
      id: 'C003',
      name: 'S.T. Perera',
      email: 'st.perera@gmail.com',
      phone: '+94 75 345 6789',
      cvUrl: '#'
    },
    {
      id: 'C004',
      name: 'L.K. Jayawardena',
      email: 'lk.jay@gmail.com',
      phone: '+94 74 456 7890',
      cvUrl: '#'
    },
    {
      id: 'C005',
      name: 'M.N. Wijesinghe',
      email: 'mn.wije@gmail.com',
      phone: '+94 73 567 8901',
      cvUrl: '#'
    },
    {
      id: 'C006',
      name: 'P.Q. Bandara',
      email: 'pq.banda@gmail.com',
      phone: '+94 72 678 9012',
      cvUrl: '#'
    }
  ];

  // Mock upcoming interview data
  const upcomingInterview = {
    id: 'int-1',
    interviewNumber: 'Interview #3',
    date: '2025-10-25',
    status: 'upcoming' as const,
    candidateCount: upcomingInterviewCandidates.length
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleScheduleInterview = () => {
    if (uploadedFile) {
      alert(`Interview scheduled successfully! Candidates from "${uploadedFile.name}" have been imported.`);
      setUploadedFile(null);
    } else {
      alert('Please upload a candidates list first.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#4db4ac] shadow-md z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-[#3c9a93] p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-white" style={{ fontWeight: 600, fontSize: '18px' }}>
            Manage Interviews
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-6 mt-6">
          {/* Schedule New Interview Section */}
          <Card className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border-0 p-6">
            <h3 className="text-[#222222] mb-4" style={{ fontWeight: 700, fontSize: '20px' }}>
              Schedule New Interview
            </h3>
            <Separator className="mb-4" />
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#222222] mb-2 block" style={{ fontSize: '14px', fontWeight: 600 }}>
                    Interview Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="e.g., Interview #4"
                    className="w-full bg-white border-[#d0d0d0] rounded-lg focus:border-[#4db4ac] focus:ring-[#4db4ac]"
                  />
                </div>
                <div>
                  <Label className="text-[#222222] mb-2 block" style={{ fontSize: '14px', fontWeight: 600 }}>
                    Interview Date
                  </Label>
                  <Input
                    type="date"
                    className="w-full bg-white border-[#d0d0d0] rounded-lg focus:border-[#4db4ac] focus:ring-[#4db4ac]"
                  />
                </div>
              </div>

              <div>
                <Label className="text-[#222222] mb-2 block" style={{ fontSize: '14px', fontWeight: 600 }}>
                  Upload Candidates List
                </Label>
                <div className="flex items-center gap-3">
                  <Input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileUpload}
                    className="w-full bg-white border-[#d0d0d0] rounded-lg focus:border-[#4db4ac] focus:ring-[#4db4ac]"
                  />
                  <Button 
                    onClick={handleScheduleInterview}
                    className="bg-[#4db4ac] hover:bg-[#3c9a93] text-white whitespace-nowrap"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Interview
                  </Button>
                </div>
                <p className="text-[#999999] mt-1" style={{ fontSize: '12px' }}>
                  Upload an Excel file (.xlsx or .xls) containing candidate information
                </p>
                {uploadedFile && (
                  <div className="mt-2 p-2 bg-[#e6f7f6] border border-[#4db4ac] rounded-lg inline-block">
                    <p className="text-[#4db4ac]" style={{ fontSize: '12px', fontWeight: 600 }}>
                      ✓ {uploadedFile.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Upcoming Interview Section */}
          <Card className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border-0 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-[#4db4ac]" />
                <h3 className="text-[#222222]" style={{ fontWeight: 700, fontSize: '20px' }}>
                  {upcomingInterview.interviewNumber} - Upcoming Interview
                </h3>
                <Badge className="bg-blue-100 text-blue-700 border-blue-300 border" style={{ fontSize: '12px' }}>
                  UPCOMING
                </Badge>
              </div>
            </div>
            <Separator className="mb-4" />

            <div className="space-y-4">
              {/* Interview Date Management */}
              <Card className="border-2 border-[#4db4ac] rounded-lg p-4 bg-[#e6f7f6]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-[#4db4ac]" />
                      <Label className="text-[#222222]" style={{ fontSize: '16px', fontWeight: 600 }}>
                        Interview Date
                      </Label>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <p className="text-[#222222]" style={{ fontSize: '18px', fontWeight: 600 }}>
                        {new Date(upcomingInterview.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#4db4ac] text-[#4db4ac] hover:bg-white"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit Date
                      </Button>
                    </div>
                  </div>

                  <Badge className="bg-blue-100 text-blue-700 border-blue-300 border px-4 py-2">
                    Waiting for Coordinator
                  </Badge>
                </div>
              </Card>

              {/* Candidate Statistics */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="border border-[#e0e0e0] rounded-lg p-4 bg-[#f9f9f9]">
                  <p className="text-[#555555] mb-1" style={{ fontSize: '12px', fontWeight: 600 }}>
                    Total Candidates
                  </p>
                  <p className="text-[#222222]" style={{ fontSize: '24px', fontWeight: 700 }}>
                    {upcomingInterviewCandidates.length}
                  </p>
                </Card>
                <Card className="border border-[#e0e0e0] rounded-lg p-4 bg-[#f9f9f9]">
                  <p className="text-[#555555] mb-1" style={{ fontSize: '12px', fontWeight: 600 }}>
                    Interview Status
                  </p>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-300 border" style={{ fontSize: '12px' }}>
                    UPCOMING
                  </Badge>
                </Card>
                <Card className="border border-[#e0e0e0] rounded-lg p-4 bg-[#f9f9f9]">
                  <p className="text-[#555555] mb-1" style={{ fontSize: '12px', fontWeight: 600 }}>
                    Days Until Interview
                  </p>
                  <p className="text-[#4db4ac]" style={{ fontSize: '24px', fontWeight: 700 }}>
                    {Math.ceil((new Date(upcomingInterview.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                  </p>
                </Card>
              </div>

              {/* Candidates List */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-[#4db4ac]" />
                  <h4 className="text-[#222222]" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Candidates for This Interview
                  </h4>
                </div>

                <div className="border border-[#e0e0e0] rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#f9f9f9]">
                        <TableHead className="text-[#222222] py-2" style={{ fontWeight: 600 }}>#</TableHead>
                        <TableHead className="text-[#222222] py-2" style={{ fontWeight: 600 }}>Candidate ID</TableHead>
                        <TableHead className="text-[#222222] py-2" style={{ fontWeight: 600 }}>Name</TableHead>
                        <TableHead className="text-[#222222] py-2" style={{ fontWeight: 600 }}>Email</TableHead>
                        <TableHead className="text-[#222222] py-2" style={{ fontWeight: 600 }}>Phone</TableHead>
                        <TableHead className="text-[#222222] py-2" style={{ fontWeight: 600 }}>CV</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingInterviewCandidates.map((candidate, index) => (
                        <TableRow key={candidate.id}>
                          <TableCell className="text-[#555555] py-2" style={{ fontSize: '13px' }}>
                            {index + 1}
                          </TableCell>
                          <TableCell className="text-[#222222] py-2" style={{ fontSize: '13px', fontWeight: 500 }}>
                            {candidate.id}
                          </TableCell>
                          <TableCell className="text-[#222222] py-2" style={{ fontSize: '13px', fontWeight: 600 }}>
                            {candidate.name}
                          </TableCell>
                          <TableCell className="py-2">
                            <div className="flex items-center gap-1 text-[#555555]" style={{ fontSize: '12px' }}>
                              <Mail className="h-3 w-3 text-[#4db4ac]" />
                              {candidate.email}
                            </div>
                          </TableCell>
                          <TableCell className="py-2">
                            <div className="flex items-center gap-1 text-[#555555]" style={{ fontSize: '12px' }}>
                              <Phone className="h-3 w-3 text-[#4db4ac]" />
                              {candidate.phone}
                            </div>
                          </TableCell>
                          <TableCell className="py-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#4db4ac] text-[#4db4ac] hover:bg-[#e6f7f6]"
                              onClick={() => alert(`Viewing CV for ${candidate.name}`)}
                            >
                              <FileText className="h-3 w-3 mr-1" />
                              View CV
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] py-3">
        <div className="text-center">
          <p className="text-[#555555]" style={{ fontSize: '13px' }}>
            University of Kelaniya | Temporary Staff Coordination System
          </p>
        </div>
      </footer>
    </div>
  );
}
