'use strict';

const fs = require('fs');
const PDFDocument = require('./pdfkit-tables');
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('example.pdf'));

const table0 = {
    headers: ['Word', 'Comment', 'Summary'],
    rows: [
        ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
        ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
    ]
};

doc.table(table0, {
    prepareHeader: () => doc.font('Helvetica-Bold'),
    prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
});

const table1 = {
    headers: ['Country', 'Conversion rate', 'Trend'],
    rows: [
        ['Switzerland', '12%', '+1.12%'],
        ['France', '67%', '-0.98%'],
        ['England', '33%', '+4.44%']
    ]
};

doc.moveDown().table(table1, 100, 350, { width: 300 });

doc.end();
