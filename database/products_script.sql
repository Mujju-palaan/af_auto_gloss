create database af_autogloss;
use af_autogloss;
-- drop table products;
-- select * from products;
create table products(
	product_id int auto_increment primary key
    ,title varchar(255) unique not null
    ,image longblob
    ,review int
    ,product_description text not null
    ,price decimal not null
);

insert into products( title, image, review, product_description, price)
values
	('Snow Foam Shampoo'
    ,(load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_Foam.jpg'))
    ,'4'
    ,'“Our premium Car Wash Foam is meticulously engineered to deliver a rich, high-density lather that adheres firmly to every contour of the vehicle’s surface. This advanced formulation effectively encapsulates and lifts away dirt, grease, and stubborn road grime, ensuring a thorough yet gentle cleansing process. Its pH-balanced composition is scientifically designed to protect delicate automotive paint, clear coats, and wax layers from potential damage, guaranteeing a scratch-free finish. The high-foaming action not only enhances cleaning efficiency but also leaves behind a radiant, glossy, showroom-quality shine. Ideal for enthusiasts and professionals alike, it provides a luxury car wash experience at home.”'
	,600.00
    ),
    ('Snow Foam Shampoo'
    ,(load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_Foam.jpg'))
    ,'4'
    ,'“Our premium Car Wash Foam is meticulously engineered to deliver a rich, high-density lather that adheres firmly to every contour of the vehicle’s surface. This advanced formulation effectively encapsulates and lifts away dirt, grease, and stubborn road grime, ensuring a thorough yet gentle cleansing process. Its pH-balanced composition is scientifically designed to protect delicate automotive paint, clear coats, and wax layers from potential damage, guaranteeing a scratch-free finish. The high-foaming action not only enhances cleaning efficiency but also leaves behind a radiant, glossy, showroom-quality shine. Ideal for enthusiasts and professionals alike, it provides a luxury car wash experience at home.”'
	,600.00
    ),
    ('Snow Foam Shampoo'
    ,(load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_Foam.jpg'))
    ,'4'
    ,'“Our premium Car Wash Foam is meticulously engineered to deliver a rich, high-density lather that adheres firmly to every contour of the vehicle’s surface. This advanced formulation effectively encapsulates and lifts away dirt, grease, and stubborn road grime, ensuring a thorough yet gentle cleansing process. Its pH-balanced composition is scientifically designed to protect delicate automotive paint, clear coats, and wax layers from potential damage, guaranteeing a scratch-free finish. The high-foaming action not only enhances cleaning efficiency but also leaves behind a radiant, glossy, showroom-quality shine. Ideal for enthusiasts and professionals alike, it provides a luxury car wash experience at home.”'
	,600.00
    ),
    ('Snow Foam Shampoo'
    ,(load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_Foam.jpg'))
    ,'4'
    ,'“Our premium Car Wash Foam is meticulously engineered to deliver a rich, high-density lather that adheres firmly to every contour of the vehicle’s surface. This advanced formulation effectively encapsulates and lifts away dirt, grease, and stubborn road grime, ensuring a thorough yet gentle cleansing process. Its pH-balanced composition is scientifically designed to protect delicate automotive paint, clear coats, and wax layers from potential damage, guaranteeing a scratch-free finish. The high-foaming action not only enhances cleaning efficiency but also leaves behind a radiant, glossy, showroom-quality shine. Ideal for enthusiasts and professionals alike, it provides a luxury car wash experience at home.”'
	,600.00
    ),
    ('Snow Foam Shampoo'
    ,(load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_Foam.jpg'))
    ,'4'
    ,'“Our premium Car Wash Foam is meticulously engineered to deliver a rich, high-density lather that adheres firmly to every contour of the vehicle’s surface. This advanced formulation effectively encapsulates and lifts away dirt, grease, and stubborn road grime, ensuring a thorough yet gentle cleansing process. Its pH-balanced composition is scientifically designed to protect delicate automotive paint, clear coats, and wax layers from potential damage, guaranteeing a scratch-free finish. The high-foaming action not only enhances cleaning efficiency but also leaves behind a radiant, glossy, showroom-quality shine. Ideal for enthusiasts and professionals alike, it provides a luxury car wash experience at home.”'
	,600.00
    )
;