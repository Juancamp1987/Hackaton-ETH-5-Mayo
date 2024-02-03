import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function HomeTable({ invoices }: { invoices: any }) {
  return (
    <Card className='homeTable h-full overflow-auto'>
      <CardHeader>
        <CardTitle>Recent Invoices</CardTitle>
      </CardHeader>
      <CardContent className='h-full overflow-y-scroll'>
        <Table className='h-full'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Position</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className='font-medium'>{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export { HomeTable };
