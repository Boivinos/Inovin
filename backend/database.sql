CREATE TABLE
    wines (
        id INT NOT NULL AUTO_INCREMENT UNIQUE,
        winemaker_id INT,
        name varchar(100) NOT NULL,
        image varchar(200) NOT NULL,
        domain varchar(100) NOT NULL,
        region varchar(100) NOT NULL,
        year INT NOT NULL,
        grape varchar(200) NOT NULL,
        alcohol_content FLOAT NOT NULL,
        red tinyint,
        white tinyint,
        fruity tinyint,
        floral tinyint,
        spicy tinyint,
        vegetal tinyint,
        wooded INT,
        acid INT,
        bitter INT,
        sugar INT,
        alcool INT,
        short INT,
        medium INT,
        intense INT,
        PRIMARY KEY (id)
    );

INSERT INTO
    wines (
        winemaker_id,
        name,
        image,
        domain,
        year,
        region,
        grape,
        alcohol_content,
        red,
        white,
        fruity,
        floral,
        spicy,
        vegetal,
        wooded,
        acid,
        bitter,
        sugar,
        alcool,
        short,
        medium,
        intense
    )
VALUES (
        NULL,
        "Climat Brechen",
        "https://images.vivino.com/thumbs/6hvMWMyjSHe_4AIHlfjstw_pb_x600.png",
        "Gondard Perrin",
        2020,
        "Viré Clessé",
        "Chardonnay",
        12,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0
    ), (
        NULL,
        "Adamo",
        "https://images.vivino.com/thumbs/dMLNKsHbRmixWRVJ896-yQ_pb_x600.png",
        "Zibibbo",
        2022,
        "Terre Siciliane",
        "Zibibbo",
        13.5,
        0,
        1,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        0
    ), (
        NULL,
        "Palette Rouge",
        "https://images.vivino.com/thumbs/5rQSVsFESwSncndiDoZkdA_pb_x600.png",
        "Château Crémade",
        2019,
        "Provence",
        "Grenache, Syrah",
        14,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0
    ), (
        NULL,
        "Ballade de la Pointe",
        "https://images.vivino.com/thumbs/Lc0GM7qATICKq8BLKwN4Ww_pb_x600.png",
        "Château La Pointe ",
        2016,
        "Pomerol",
        "Merlot, Cabernet Franc",
        14,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        0
    ), (
        NULL,
        "Château Valmy",
        "https://images.vivino.com/thumbs/OWnZaOnHSeagMdG_UGeGSw_pb_x600.png",
        "Le Premier de Valmy",
        2020,
        "Côtes du Roussillon",
        "Grenache, Mourvedre, Syrah",
        12,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        0
    ), (
        NULL,
        "Château de Gourdon",
        "https://images.vivino.com/thumbs/FW8hWDT-R8eP_6-uePUKXw_pb_x600.png",
        "Terrasse au Soleil Côtes du Rhône",
        2022,
        "Côtes du Rhône",
        "Grenache Blanc",
        14,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0
    ), (
        NULL,
        "Saint-Julien",
        "https://images.vivino.com/thumbs/IjUco-lhQ2Gt-pmFt84ZPw_pb_x600.png",
        "Château Branaire-Ducru",
        2015,
        "Saint Julien",
        "Merlot, Cabernet Franc",
        14,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1
    ), (
        NULL,
        "Sauternes",
        "https://images.vivino.com/thumbs/yyAgH9OpQjKEBxg1N1RBmA_pb_x600.png",
        "Château Suduiraut",
        2007,
        "Sauternes",
        "Sauvignon Blanc, Sémillon",
        11,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0
    ), (
        NULL,
        "Petit Manseng",
        "https://images.vivino.com/thumbs/AVeXhm5hSBmeFkYsi25NkA_pb_x600.png",
        "Uby",
        2018,
        "Côtes de Gascogne",
        "Petit Manseng, Gros Manseng",
        11,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0
    ), (
        NULL,
        "Meursault-Blagny",
        "https://images.vivino.com/thumbs/5RHf-mfuRHm-jpg3UlKKfw_pb_x960.png",
        "Louis Latour",
        2015,
        "Bordeaux",
        "Pinot noir",
        14,
        0,
        1,
        1,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        0
    ), (
        NULL,
        "Pomerol",
        "https://images.vivino.com/thumbs/M889RhjFRdOdvTh4xYBDoQ_pb_x960.png",
        "Chateau de Sales",
        2011,
        "Normandie",
        "Pinot noir, Merlot",
        13,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1
    ), (
        NULL,
        "Natana Cuvée Rouge",
        "https://images.vivino.com/thumbs/a7-WsnN6TKG4lH1LjfFjbw_pb_x960.png",
        "Marianne",
        2019,
        "Nantes",
        "Merlot",
        11.5,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0
    ), (
        NULL,
        "Domaine de Bila-Haut",
        "https://images.vivino.com/thumbs/7phdZm64SHiWwH8wwCpedQ_pb_x960.png",
        "M. Chapoutier",
        2022,
        "Corse",
        "Cabernet Sauvignon, Chardonnay",
        12.5,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ), (
        NULL,
        "Pomerol",
        "https://images.vivino.com/thumbs/_abY0tGKQnC6mdcJAo0wcQ_pb_x960.png",
        "Chateau l'Evangile",
        2014,
        "Bordeaux",
        "Cabernet Sauvignon",
        13.5,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        0
    ), (
        NULL,
        "Margaux",
        "https://images.vivino.com/thumbs/t61FjP97R-SOyDIHfV_OPg_pb_x960.png",
        "Chateau la Besssane",
        2018,
        "Champagne",
        "Cabernet Sauvignon, Chardonnay",
        12,
        1,
        0,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        0
    );

CREATE TABLE
    users (
        id INT NOT NULL AUTO_INCREMENT UNIQUE,
        firstname varchar(100) NOT NULL,
        lastname varchar(100) NOT NULL,
        born DATE,
        email varchar(100) NOT NULL UNIQUE,
        hashedPassword varchar(300) NOT NULL,
        taste_description varchar(500),
        isadmin tinyint,
        isvigneron tinyint,
        wine_domain varchar(100),
        desc_domain varchar(400),
        picture_domain varchar(100),
        PRIMARY KEY (id)
    );

INSERT INTO
    users (
        firstname,
        lastname,
        born,
        email,
        hashedPassword,
        isadmin
    )
VALUES (
        "John",
        "Bob",
        "1995-01-01",
        "johnbob@gmail.com",
        "password",
        0
    ), (
        "Chuck",
        "Norris",
        "1995-01-01",
        "chuck@gmail.com",
        "chucknapasbesoindepassword",
        0
    ), (
        "Admin",
        "Inovin",
        "1995-01-01",
        "inovin@gmail.com",
        "$argon2id$v=19$m=65536,t=5,p=1$cR5y4i5DhC3WaREJJeHcHQ$fP7kMe/pu/qFzGtPVP7temhIMCfTIABUwqmb91NseZE",
        1
    );

CREATE TABLE
    IF NOT EXISTS selection (
        user_id INT NOT NULL,
        wine_id INT NOT NULL,
        score FLOAT,
        PRIMARY KEY (user_id, wine_id)
    );

CREATE TABLE
    IF NOT EXISTS user_notes (
        wine_id INT NOT NULL,
        user_id INT NOT NULL,
        note INT,
        PRIMARY KEY (wine_id, user_id)
    );

CREATE TABLE
    IF NOT EXISTS user_comments (
        id INT NOT NULL AUTO_INCREMENT UNIQUE,
        wine_id INT NOT NULL,
        user_id INT NOT NULL,
        comment_content varchar(400) NOT NULL,
        comment_date TIMESTAMP NOT NULL,
        PRIMARY KEY (id, wine_id, user_id)
    );

INSERT INTO
    user_comments (
        wine_id,
        user_id,
        comment_content,
        comment_date
    )
VALUES (
        1,
        1,
        "Excellent vin de table, je recommande avec du hareng !",
        "2023-06-14"
    ), (
        1,
        2,
        "Chuck n'aime pas le vin blanc",
        "2021-05-11"
    ), (
        2,
        2,
        "Chuck aime le vin rouge",
        "2021-05-11"
    );

CREATE TABLE
    IF NOT EXISTS favorites (
        user_id INT NOT NULL,
        wine_id INT NOT NULL,
        PRIMARY KEY (user_id, wine_id)
    );

CREATE TABLE
    IF NOT EXISTS recipes (
        id INT NOT NULL AUTO_INCREMENT,
        wine_id INT NOT NULL,
        ingredient varchar(300) NOT NULL,
        methode varchar(400) NOT NULL,
        PRIMARY KEY (id, wine_id)
    );

ALTER TABLE wines
ADD
    CONSTRAINT wine_fk0 FOREIGN KEY (winemaker_id) REFERENCES users(id);

ALTER TABLE selection
ADD
    CONSTRAINT selection_fk0 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE selection
ADD
    CONSTRAINT selection_fk1 FOREIGN KEY (wine_id) REFERENCES wines(id) ON DELETE CASCADE;

ALTER TABLE user_notes
ADD
    CONSTRAINT user_notes_fk0 FOREIGN KEY (wine_id) REFERENCES wines(id) ON DELETE CASCADE;

ALTER TABLE user_notes
ADD
    CONSTRAINT user_notes_fk1 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE user_comments
ADD
    CONSTRAINT user_comments_fk0 FOREIGN KEY (wine_id) REFERENCES wines(id) ON DELETE CASCADE;

ALTER TABLE user_comments
ADD
    CONSTRAINT user_comments_fk1 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE favorites
ADD
    CONSTRAINT favorites_fk0 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
ADD
    CONSTRAINT favorites_fk1 FOREIGN KEY (wine_id) REFERENCES wines(id) ON DELETE CASCADE;

ALTER TABLE recipes
ADD
    CONSTRAINT recipes_fk0 FOREIGN KEY (wine_id) REFERENCES wines(id);