INSERT INTO Vendor (Address1,City,Province,Postal_Code,Phone,Type,Name,Email) VALUES ('123 Maple St','Hamilton','On', 'N1N-1N1','(555)555-5555','Trusted','Pink Pens Supply','pens@pinkandfluffy.com');
INSERT INTO Vendor (Address1,City,Province,Postal_Code,Phone,Type,Name,Email) VALUES ('543 Sycamore Ave','Toronto','On', 'N1P-1N1','(999)555-5555','Trusted','Organic and Vegan Food Supply','organic@pinkandfluffy.com');
INSERT INTO Vendor (Address1,City,Province,Postal_Code,Phone,Type,Name,Email) VALUES ('922 Oak St','Ottawa','On', 'N1N-1N1','(555)555-5599','Un Trusted','Tommy`s #1 Software Supply','tommy@pink.com');
INSERT INTO Vendor (Address1,City,Province,Postal_Code,Phone,Type,Name,Email) VALUES ('123 Redpine St','Vancouver','On', 'N1N-1N1','(555)555-5599','Trusted','Pink and Fluffy Hardware Supply','hardware@pinkandfluffy.com');
INSERT INTO Vendor (Address1,City,Province,Postal_Code,Phone,Type,Name,Email) VALUES ('123 Pink Lane','Quebec','On', 'N1N-1N1','(555)555-5599','Trusted','Eloise Lin','el@pinkandfluffy.com');

-- add product vendor categories
INSERT INTO Product_Vendor_Category (Id, Name) VALUES ('1a','Office Supplies');
INSERT INTO Product_Vendor_Category (Id, Name) VALUES ('2b','Vegan Food');
INSERT INTO Product_Vendor_Category (Id, Name) VALUES ('3c','Software');
INSERT INTO Product_Vendor_Category (Id, Name) VALUES ('4d','Hardware');

--DROP TABLE Product;
-- add some products to seed the table
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred )
VALUES ('11e',1,'Blue Pen',25.99,5,30.25,20,20,'892034','www.eloiselin.com','scanned',7,'9/15/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ( '11ef',1,'Red Pen',26.99,5,31.25,20,20,'892334','www.eloiselin.com','scanned',7,'9/16/20');
INSERT INTO Product (Id, VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('22d', 2,'Chocolate Soy Milk',12.99,5,15.89,45,50,'892034','www.eloiselin.com','unscanned',7,'9/17/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('22de', 2,'Vanilla Soy Milk',11.99,5,10.89,45,50,'892033','www.eloiselin.com','unscanned',7,'9/18/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('33i44r', 2,'Strawberry Soy Milk',13.99,5,13.99,45,50,'892133','www.eloiselin.com','unscanned',7,'9/19/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('33i',3,'Nvidia Quadro GPU',1200.99,5,1500.99,10,10,'892034','www.eloiselin.com','scanned',7,'9/20/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('34i',3,'MSI GeForce RTX 2060 6GB Gaming Z Graphics Card',899.99,5,1445.99,10,10,'892035','www.eloiselin.com','scanned',7,'9/21/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('7gsa',4,'PC Monitor',820.99,5,899.99,15,10,'892033','www.eloiselin.com','scanned',7, '10/15/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('22der', 5,'Green Bean Soy Milk',11.99,5,12.89,45,50,'892033','www.eloiselin.com','unscanned',7,'12/10/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('22deg', 5,'Coconut Soy Milk',12.99,5,15.89,45,50,'892033','www.eloiselin.com','unscanned',7,'12/10/20');
INSERT INTO Product (Id,VendorId,Name,CostPrice,Eoq,Msrp,Qoh,Qoo,QrCode,QrCodeTxt,ReceiptScan,Rop,DateIncurred)
VALUES ('22den', 5,'Banana Soy Milk',13.99,5,16.89,45,50,'892033','www.eloiselin.com','unscanned',7,'12/10/20');
