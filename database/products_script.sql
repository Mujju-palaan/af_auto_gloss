create database af_autogloss;
use af_autogloss;
-- drop table products;
-- select * from products;
create table products(
	id int auto_increment primary key
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
    ('Dashboard Cleaner'
    ,(load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_Dashboard_Polish.jpg'))
    ,'4'
    ,'“Our advanced Dashboard Cleaner is expertly formulated to provide superior care for all interior surfaces, delivering both cleanliness and protection in a single application. Its innovative composition effectively lifts away dust, dirt, and stubborn stains while rejuvenating the surface with a natural, long-lasting sheen. Designed with a non-greasy finish, it ensures a smooth, residue-free appearance that enhances driving comfort and aesthetics. Enriched with powerful UV-blocking agents, it safeguards against harmful sun exposure, preventing fading, discoloration, and cracking over time. Consistently maintaining a fresh, clean, and showroom-quality look, this professional-grade solution is ideal for those who value automotive interior excellence.”'
	,1000.00
    ),
    ('Tyre Polish'
    ,(load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_TyrePolish.png'))
    ,'4'
    ,'“Our premium Tyre Polish is scientifically developed to restore and enhance the natural appearance of vehicle tyres, delivering a deep, long-lasting black sheen that instantly elevates overall aesthetics. Its advanced polymer-rich formula creates a protective barrier against dust, dirt, and environmental contaminants, while effectively shielding tyres from harmful UV rays, premature fading, and surface cracking. Engineered for durability, the treatment maintains a cleaner, glossier finish for extended periods, even in challenging weather conditions. With regular application, it not only revitalizes tyre surfaces but also contributes to a bold, showroom-ready look, making it the ideal solution for automotive perfectionists.”'
	,1200.00
    ),
    ('Glass Cleaner'
    ,(load_file('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_GlassCleaner.jpg'))
    ,'4'
    ,'“Our advanced Glass Cleaner is meticulously formulated to deliver unmatched clarity and cleanliness for all automotive glass surfaces. Its high-performance solution effortlessly eliminates dust, dirt, smudges, fingerprints, watermarks, and even stubborn stains, ensuring a crystal-clear, streak-free finish. The quick-dry, anti-haze technology enhances visibility in all driving conditions, significantly improving both aesthetics and safety. Specially engineered to resist re-soiling, it keeps windows and mirrors spotless for longer, maintaining a sparkling, like-new appearance. Safe for tinted glass and mirrors, this professional-grade cleaner is the ideal choice for vehicle owners who demand precision, brilliance, and long-lasting results with every application.”'
	,500.00
    )
;