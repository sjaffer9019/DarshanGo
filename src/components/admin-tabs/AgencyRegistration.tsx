import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export function AgencyRegistration() {
  return (
    <div className="max-w-3xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Register New Agency</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Basic Details */}
            <div className="space-y-4">
              <h3 className="text-gray-900">Basic Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="agencyCode">Agency Code</Label>
                  <Input id="agencyCode" placeholder="e.g., PWD-RJ-001" />
                </div>
                <div>
                  <Label htmlFor="agencyName">Agency Name</Label>
                  <Input id="agencyName" placeholder="Enter agency name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="agencyType">Agency Type</Label>
                  <Select>
                    <SelectTrigger id="agencyType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pwd">PWD (Public Works Department)</SelectItem>
                      <SelectItem value="ngo">NGO</SelectItem>
                      <SelectItem value="pri">PRI (Panchayati Raj Institution)</SelectItem>
                      <SelectItem value="state">State Department</SelectItem>
                      <SelectItem value="central">Central Agency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="role">Implementation Role</Label>
                  <Select>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="implementing">Implementing Agency</SelectItem>
                      <SelectItem value="executing">Executing Agency</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state">State</Label>
                  <Select>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="up">Uttar Pradesh</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="mp">Madhya Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="district">District</Label>
                  <Input id="district" placeholder="Enter district" />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter complete address" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-gray-900">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactPerson">Contact Person Name</Label>
                  <Input id="contactPerson" placeholder="Enter name" />
                </div>
                <div>
                  <Label htmlFor="designation">Designation</Label>
                  <Input id="designation" placeholder="Enter designation" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="contact@agency.gov.in" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="altPhone">Alternate Phone</Label>
                  <Input id="altPhone" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <Label htmlFor="altEmail">Alternate Email</Label>
                  <Input id="altEmail" type="email" placeholder="alternate@agency.gov.in" />
                </div>
              </div>
            </div>

            {/* Component Assignment */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-gray-900">Component Assignment</h3>
              <p className="text-gray-600">Select the components this agency will handle</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Checkbox id="adarshGram" />
                  <label htmlFor="adarshGram" className="text-gray-900 cursor-pointer">
                    Adarsh Gram (Model Village Development)
                  </label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Checkbox id="gia" />
                  <label htmlFor="gia" className="text-gray-900 cursor-pointer">
                    GIA (Grant-in-Aid Infrastructure)
                  </label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Checkbox id="hostel" />
                  <label htmlFor="hostel" className="text-gray-900 cursor-pointer">
                    Hostel (Student Accommodation)
                  </label>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-gray-900">Bank Account Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input id="bankName" placeholder="Enter bank name" />
                </div>
                <div>
                  <Label htmlFor="branchName">Branch Name</Label>
                  <Input id="branchName" placeholder="Enter branch name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input id="accountNumber" placeholder="Enter account number" />
                </div>
                <div>
                  <Label htmlFor="ifsc">IFSC Code</Label>
                  <Input id="ifsc" placeholder="Enter IFSC code" />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-gray-900">Additional Information</h3>
              
              <div>
                <Label htmlFor="registrationNumber">Registration Number</Label>
                <Input id="registrationNumber" placeholder="Enter registration number" />
              </div>

              <div>
                <Label htmlFor="gstNumber">GST Number (if applicable)</Label>
                <Input id="gstNumber" placeholder="Enter GST number" />
              </div>

              <div>
                <Label htmlFor="notes">Notes / Remarks</Label>
                <textarea
                  id="notes"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter any additional information..."
                ></textarea>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" className="flex-1">Register Agency</Button>
              <Button type="button" variant="outline" className="flex-1">Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
