-- Users Table
CREATE TABLE users (
                       user_id SERIAL PRIMARY KEY,
                       username VARCHAR(255) NOT NULL,
                       password VARCHAR(255) NOT NULL,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       phone_number VARCHAR(20),
                       registration_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                       role VARCHAR(50) NOT NULL
);

-- Categories Table
CREATE TABLE categories (
                            category_id SERIAL PRIMARY KEY,
                            name VARCHAR(255) NOT NULL
);

-- Products Table
CREATE TABLE products (
                          product_id SERIAL PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          description TEXT,
                          price DECIMAL(10, 2) NOT NULL,
                          stock_quantity INT NOT NULL,
                          category_id INT,
                          seller_id INT,
                          image_urls TEXT[],
                          FOREIGN KEY (category_id) REFERENCES categories(category_id),
                          FOREIGN KEY (seller_id) REFERENCES users(user_id)
);

-- Orders Table
CREATE TABLE orders (
                        order_id SERIAL PRIMARY KEY,
                        user_id INT NOT NULL,
                        total_amount DECIMAL(10, 2) NOT NULL,
                        status VARCHAR(50) NOT NULL,
                        creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        update_date TIMESTAMP,
                        FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Order Details Table
CREATE TABLE order_details (
                               order_detail_id SERIAL PRIMARY KEY,
                               order_id INT NOT NULL,
                               product_id INT NOT NULL,
                               quantity INT NOT NULL,
                               price_per_unit DECIMAL(10, 2) NOT NULL,
                               FOREIGN KEY (order_id) REFERENCES orders(order_id),
                               FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Cart Table
CREATE TABLE cart (
                      cart_id SERIAL PRIMARY KEY,
                      user_id INT NOT NULL,
                      product_id INT NOT NULL,
                      quantity INT NOT NULL,
                      FOREIGN KEY (user_id) REFERENCES users(user_id),
                      FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Reviews Table
CREATE TABLE reviews (
                         review_id SERIAL PRIMARY KEY,
                         product_id INT NOT NULL,
                         user_id INT NOT NULL,
                         review_text TEXT,
                         rating INT,
                         review_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         FOREIGN KEY (product_id) REFERENCES products(product_id),
                         FOREIGN KEY (user_id) REFERENCES users(user_id)
);