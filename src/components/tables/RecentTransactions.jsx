// React Imports
import { useState } from 'react';

// MUI Imports
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const columns = [
  {
    flex: 0.2,
    field: 'id',
    minWidth: 90,
    headerName: 'Transaction ID'
  },
  {
    flex: 0.3,
    minWidth: 125,
    field: 'customer',
    headerName: 'Customer',
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={params.row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
        <Box>
          <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
            {params.row.customerName}
          </Typography>
          <Typography variant="caption">{params.row.customerEmail}</Typography>
        </Box>
      </Box>
    )
  },
  {
    flex: 0.2,
    minWidth: 110,
    field: 'date',
    headerName: 'Date',
    renderCell: (params) => (
      <Typography variant="body2">{params.row.date}</Typography>
    )
  },
  {
    flex: 0.2,
    minWidth: 100,
    field: 'amount',
    headerName: 'Amount',
    renderCell: (params) => (
      <Typography variant="body2">${params.row.amount}</Typography>
    )
  },
  {
    flex: 0.2,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{
          color: params.row.status === 'Paid' ? 'success.main' : 'error.main'
        }}
      >
        {params.row.status}
      </Typography>
    )
  }
];

const rows = [
  {
    id: '#4987',
    avatar: '/images/avatars/1.png',
    customerName: 'Jordan Stevenson',
    customerEmail: 'jordan@example.com',
    date: '13 Jan 2024',
    amount: 87.5,
    status: 'Paid'
  },
  {
    id: '#4988',
    avatar: '/images/avatars/2.png',
    customerName: 'Larissa Gebhardt',
    customerEmail: 'larissa@example.com',
    date: '14 Jan 2024',
    amount: 245.0,
    status: 'Pending'
  },
  {
    id: '#4989',
    avatar: '/images/avatars/3.png',
    customerName: 'Cristopher Cardenas',
    customerEmail: 'cristopher@example.com',
    date: '15 Jan 2024',
    amount: 125.75,
    status: 'Paid'
  },
  {
    id: '#4990',
    avatar: '/images/avatars/4.png',
    customerName: 'Beth Murphy',
    customerEmail: 'beth@example.com',
    date: '16 Jan 2024',
    amount: 445.25,
    status: 'Pending'
  },
  {
    id: '#4991',
    avatar: '/images/avatars/5.png',
    customerName: 'Guy Hawkins',
    customerEmail: 'guy@example.com',
    date: '17 Jan 2024',
    amount: 132.0,
    status: 'Paid'
  }
];

const RecentTransactions = () => {
  // Hooks
  const theme = useTheme();

  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      disableRowSelectionOnClick
      pageSizeOptions={[5]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5
          }
        }
      }}
      sx={{
        '& .MuiDataGrid-columnHeaders': {
          borderBottom: `1px solid ${theme.palette.divider}`
        }
      }}
    />
  );
};

export default RecentTransactions; 