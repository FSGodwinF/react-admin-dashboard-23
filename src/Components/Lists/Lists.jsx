import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './lists.scss'

const Lists = () => {
  const rows = [
      {
          id:1342424,
          product: "Apple 2021 10.2 inch ipad",
          img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61NGnpjoRDL._AC_UL320_.jpg",
          customer: "Emmanuel Tyoden",
          date: "20 March",
          amount: 1000,
          payment: "online payment",
          status: "Approved"

      },
      {
        id:2034742 ,
        product: "Playstation PS5 Console",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61SUJDrCTLL._AC_UL320_.jpg",
        customer: "Godwin Faden",
        date: "21 March",
        amount: 509,
        payment: "online payment",
        status: "Approved"

    },
    {
        id:4353301 ,
        product: "Xbox Series X",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/612y5847pVL._AC_UL320_.jpg",
        customer: "Ted Lasso",
        date: "19 March",
        amount: 558,
        payment: "online payment",
        status: "Pending"

    },
    {
        id:8976543 ,
        product: "Vitamix Propel Series Blender",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71SgHWBEqcL._AC_UL640_QL65_.jpg",
        customer: "Steven Asieba",
        date: "23 March",
        amount: 479,
        payment: "online payment",
        status: "Approved"

    },
    {
        id:3338561,
        product: "Vintage 1980s Graphic style Columbia T-Shirt",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61NQP-yzHxL._AC_UL400_.jpg",
        customer: "Pablo Escobar",
        date: "22 March",
        amount: 17,
        payment: "Cash on delivery",
        status: "Pending"

    },
    {
        id:1982457,
        product: "Nike Sportswear Pullover Hoodie",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71zdwdDgt-L._AC_UL400_.jpg",
        customer: "Kevin Durant",
        date: "22 March",
        amount: 36,
        payment: "Online Payment",
        status: "Approved"

    },
    {
        id:2398765,
        product: "Women One Piece Lingerie Lace",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81EhHkMdvuL._AC_UL400_.jpg",
        customer: "Caitlynn Nguyen",
        date: "25 March",
        amount: 15,
        payment: "Cash on Delivery",
        status: "Pending"
    },
    
    
  ];

  return (
    <div className="lists">
         <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
             
            >
              <TableCell className="tableCell" >{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
               
                </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.payment}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Lists