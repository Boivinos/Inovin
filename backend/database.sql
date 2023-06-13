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
        0,
        1,
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
        email varchar(100) NOT NULL,
        user_password varchar(100) NOT NULL,
        isadmin tinyint,
        isvigneron tinyint,
        wine_domain varchar(100),
        desc_domain varchar(400),
        picture_domain varchar(100),
        PRIMARY KEY (id)
    );

CREATE TABLE
    IF NOT EXISTS selection (
        user_id INT NOT NULL,
        wine_id INT NOT NULL,
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
        id INT NOT NULL,
        wine_id INT NOT NULL,
        user_id INT NOT NULL,
        contenu varchar(400) NOT NULL,
        comment_date TIMESTAMP NOT NULL,
        PRIMARY KEY (id, wine_id, user_id)
    );

CREATE TABLE
    IF NOT EXISTS favourites (
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
    CONSTRAINT selection_fk0 FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE selection
ADD
    CONSTRAINT selection_fk1 FOREIGN KEY (wine_id) REFERENCES wines(id);

ALTER TABLE user_notes
ADD
    CONSTRAINT user_notes_fk0 FOREIGN KEY (wine_id) REFERENCES wines(id);

ALTER TABLE user_notes
ADD
    CONSTRAINT user_notes_fk1 FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE user_comments
ADD
    CONSTRAINT user_comments_fk0 FOREIGN KEY (wine_id) REFERENCES wines(id);

ALTER TABLE user_comments
ADD
    CONSTRAINT user_comments_fk1 FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE favourites
ADD
    CONSTRAINT favourites_fk0 FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE favourites
ADD
    CONSTRAINT favourites_fk1 FOREIGN KEY (wine_id) REFERENCES wines(id);

ALTER TABLE recipes
ADD
    CONSTRAINT recipes_fk0 FOREIGN KEY (wine_id) REFERENCES wines(id);