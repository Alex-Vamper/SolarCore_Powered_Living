import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductSupport = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white-900 mb-8">Support & Documentation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">User Manual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Comprehensive user guide with detailed instructions</p>
            <Button variant="outline" size="sm">Download PDF</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Technical Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Get help from our technical support team</p>
            <Button variant="outline" size="sm">Contact Support</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Community Forum</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Connect with other users and share experiences</p>
            <Button variant="outline" size="sm">Join Forum</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};