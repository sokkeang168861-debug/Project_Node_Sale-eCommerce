-- Complete seed data for all 11 tables

-- Disable foreign key checks
SET FOREIGN_KEY_CHECKS = 0;

-- Clear existing data
TRUNCATE TABLE activity_logs;
TRUNCATE TABLE shipments;
TRUNCATE TABLE payments;
TRUNCATE TABLE order_items;
TRUNCATE TABLE orders;
TRUNCATE TABLE inventories;
TRUNCATE TABLE customers;
TRUNCATE TABLE products;
TRUNCATE TABLE categories;
TRUNCATE TABLE warehouses;
TRUNCATE TABLE users;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;

--
-- Data for table `users`
--
INSERT INTO `users` (`user_id`, `email`, `password`, `first_name`, `last_name`, `is_active`, `created_at`) VALUES
  (1, 'alice@example.com', '$2b$10$aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'Alice', 'Johnson', 1, '2026-05-01 08:15:00'),
  (2, 'bob@example.com', '$2b$10$bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 'Bob', 'Martinez', 1, '2026-05-02 09:20:00'),
  (3, 'carol@example.com', '$2b$10$cccccccccccccccccccccccccccccccccccccccccccccc', 'Carol', 'Nguyen', 1, '2026-05-03 10:25:00'),
  (4, 'david@example.com', '$2b$10$dddddddddddddddddddddddddddddddddddddddddddddd', 'David', 'Smith', 1, '2026-05-04 11:30:00'),
  (5, 'emma@example.com', '$2b$10$eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 'Emma', 'Garcia', 1, '2026-05-05 12:35:00'),
  (6, 'frank@example.com', '$2b$10$ffffffffffffffffffffffffffffffffffffffffffffff', 'Frank', 'Kim', 1, '2026-05-06 13:40:00'),
  (7, 'grace@example.com', '$2b$10$gggggggggggggggggggggggggggggggggggggggggggggg', 'Grace', 'Patel', 1, '2026-05-07 14:45:00'),
  (8, 'henry@example.com', '$2b$10$hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', 'Henry', 'Brown', 1, '2026-05-08 15:50:00'),
  (9, 'irene@example.com', '$2b$10$iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', 'Irene', 'Lopez', 1, '2026-05-09 16:55:00'),
  (10, 'jason@example.com', '$2b$10$jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'Jason', 'Davis', 1, '2026-05-10 17:00:00');

--
-- Data for table `categories`
--
INSERT INTO `categories` (`category_id`, `name`, `description`, `created_at`) VALUES
  (1, 'Electronics', 'Electronic devices and gadgets', '2026-05-01 08:00:00'),
  (2, 'Fashion', 'Clothing and accessories', '2026-05-01 08:05:00'),
  (3, 'Home & Kitchen', 'Home appliances and kitchenware', '2026-05-01 08:10:00'),
  (4, 'Sports', 'Sports equipment and outdoor gear', '2026-05-01 08:15:00'),
  (5, 'Books', 'Books and reading materials', '2026-05-01 08:20:00'),
  (6, 'Toys', 'Toys and games', '2026-05-01 08:25:00'),
  (7, 'Beauty', 'Beauty and personal care', '2026-05-01 08:30:00'),
  (8, 'Automotive', 'Car and automotive accessories', '2026-05-01 08:35:00'),
  (9, 'Music', 'Musical instruments', '2026-05-01 08:40:00'),
  (10, 'Furniture', 'Furniture and home décor', '2026-05-01 08:45:00');

--
-- Data for table `products`
--
INSERT INTO `products` (`product_id`, `name`, `description`, `category_id`, `price`, `stock_quantity`, `created_at`) VALUES
  (1, 'Wireless Headphones', 'High-quality Bluetooth headphones', 1, 79.99, 50, '2026-05-01 09:00:00'),
  (2, 'Cotton T-Shirt', 'Comfortable 100% cotton t-shirt', 2, 19.99, 150, '2026-05-01 09:05:00'),
  (3, 'Coffee Maker', 'Programmable coffee maker 12 cups', 3, 49.99, 30, '2026-05-01 09:10:00'),
  (4, 'Basketball', 'Official size indoor/outdoor basketball', 4, 29.99, 60, '2026-05-01 09:15:00'),
  (5, 'Science Fiction Novel', 'Best-selling sci-fi novel', 5, 15.99, 100, '2026-05-01 09:20:00'),
  (6, 'Building Blocks Set', '1000 piece building blocks', 6, 39.99, 40, '2026-05-01 09:25:00'),
  (7, 'Facial Cream', 'Anti-aging facial moisturizer', 7, 34.99, 80, '2026-05-01 09:30:00'),
  (8, 'Car Air Freshener', 'Lavender scent air freshener', 8, 9.99, 200, '2026-05-01 09:35:00'),
  (9, 'Acoustic Guitar', 'Beginner-friendly acoustic guitar', 9, 129.99, 25, '2026-05-01 09:40:00'),
  (10, 'Dining Table', 'Wooden dining table for 6 people', 10, 399.99, 15, '2026-05-01 09:45:00');

--
-- Data for table `customers`
--
INSERT INTO `customers` (`customer_id`, `user_id`, `phone`, `address`, `city`, `state`, `postal_code`, `country`, `created_at`) VALUES
  (1, 1, '+1-555-0101', '123 Main St', 'New York', 'NY', '10001', 'USA', '2026-05-01 10:00:00'),
  (2, 2, '+1-555-0102', '456 Oak Ave', 'Los Angeles', 'CA', '90001', 'USA', '2026-05-01 10:05:00'),
  (3, 3, '+1-555-0103', '789 Pine Rd', 'Chicago', 'IL', '60601', 'USA', '2026-05-01 10:10:00'),
  (4, 4, '+1-555-0104', '321 Elm St', 'Houston', 'TX', '77001', 'USA', '2026-05-01 10:15:00'),
  (5, 5, '+1-555-0105', '654 Maple Dr', 'Phoenix', 'AZ', '85001', 'USA', '2026-05-01 10:20:00'),
  (6, 6, '+1-555-0106', '987 Cedar Ln', 'Philadelphia', 'PA', '19101', 'USA', '2026-05-01 10:25:00'),
  (7, 7, '+1-555-0107', '135 Birch Pl', 'San Antonio', 'TX', '78201', 'USA', '2026-05-01 10:30:00'),
  (8, 8, '+1-555-0108', '246 Spruce Way', 'San Diego', 'CA', '92101', 'USA', '2026-05-01 10:35:00'),
  (9, 9, '+1-555-0109', '369 Walnut Ct', 'Dallas', 'TX', '75201', 'USA', '2026-05-01 10:40:00'),
  (10, 10, '+1-555-0110', '741 Ash Ave', 'San Jose', 'CA', '95101', 'USA', '2026-05-01 10:45:00');

--
-- Data for table `warehouses`
--
INSERT INTO `warehouses` (`warehouse_id`, `name`, `location`, `capacity`, `created_at`) VALUES
  (1, 'Main Warehouse', 'New York, NY', 10000, '2026-05-01 11:00:00'),
  (2, 'West Coast Hub', 'Los Angeles, CA', 8000, '2026-05-01 11:05:00'),
  (3, 'Central Distribution', 'Chicago, IL', 7500, '2026-05-01 11:10:00'),
  (4, 'South Regional', 'Houston, TX', 6000, '2026-05-01 11:15:00'),
  (5, 'Southwest Center', 'Phoenix, AZ', 5000, '2026-05-01 11:20:00'),
  (6, 'Northeast Facility', 'Philadelphia, PA', 5500, '2026-05-01 11:25:00'),
  (7, 'Texas Branch', 'San Antonio, TX', 4500, '2026-05-01 11:30:00'),
  (8, 'California South', 'San Diego, CA', 4000, '2026-05-01 11:35:00'),
  (9, 'Dallas Office', 'Dallas, TX', 3500, '2026-05-01 11:40:00'),
  (10, 'West Valley', 'San Jose, CA', 3000, '2026-05-01 11:45:00');

--
-- Data for table `inventories`
--
INSERT INTO `inventories` (`inventory_id`, `product_id`, `warehouse_id`, `quantity_on_hand`, `reorder_level`, `updated_at`) VALUES
  (1, 1, 1, 45, 10, '2026-05-15 14:00:00'),
  (2, 2, 2, 120, 20, '2026-05-15 14:05:00'),
  (3, 3, 3, 25, 5, '2026-05-15 14:10:00'),
  (4, 4, 4, 55, 15, '2026-05-15 14:15:00'),
  (5, 5, 5, 85, 20, '2026-05-15 14:20:00'),
  (6, 6, 1, 38, 10, '2026-05-15 14:25:00'),
  (7, 7, 2, 72, 15, '2026-05-15 14:30:00'),
  (8, 8, 3, 180, 30, '2026-05-15 14:35:00'),
  (9, 9, 4, 20, 5, '2026-05-15 14:40:00'),
  (10, 10, 5, 12, 3, '2026-05-15 14:45:00');

--
-- Data for table `orders`
--
INSERT INTO `orders` (`order_id`, `customer_id`, `total_amount`, `order_status`, `created_at`) VALUES
  (1, 1, 129.98, 'completed', '2026-05-05 08:00:00'),
  (2, 2, 49.99, 'completed', '2026-05-06 09:15:00'),
  (3, 3, 99.97, 'pending', '2026-05-07 10:30:00'),
  (4, 4, 59.98, 'processing', '2026-05-08 11:45:00'),
  (5, 5, 189.97, 'completed', '2026-05-09 13:00:00'),
  (6, 6, 79.99, 'pending', '2026-05-10 14:15:00'),
  (7, 7, 69.98, 'processing', '2026-05-11 15:30:00'),
  (8, 8, 109.98, 'completed', '2026-05-12 16:45:00'),
  (9, 9, 199.97, 'pending', '2026-05-13 17:00:00'),
  (10, 10, 439.98, 'completed', '2026-05-14 18:15:00');

--
-- Data for table `order_items`
--
INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `quantity`, `unit_price`) VALUES
  (1, 1, 1, 1, 79.99),
  (2, 1, 5, 1, 15.99),
  (3, 2, 3, 1, 49.99),
  (4, 3, 2, 2, 19.99),
  (5, 3, 8, 3, 9.99),
  (6, 4, 4, 2, 29.99),
  (7, 5, 9, 1, 129.99),
  (8, 5, 7, 1, 34.99),
  (9, 6, 1, 1, 79.99),
  (10, 7, 6, 1, 39.99);

--
-- Data for table `payments`
--
INSERT INTO `payments` (`payment_id`, `order_id`, `amount`, `payment_method`, `payment_status`, `transaction_id`, `created_at`) VALUES
  (1, 1, 129.98, 'credit_card', 'completed', 'TXN001', '2026-05-05 08:05:00'),
  (2, 2, 49.99, 'credit_card', 'completed', 'TXN002', '2026-05-06 09:20:00'),
  (3, 3, 99.97, 'debit_card', 'pending', 'TXN003', '2026-05-07 10:35:00'),
  (4, 4, 59.98, 'credit_card', 'processing', 'TXN004', '2026-05-08 11:50:00'),
  (5, 5, 189.97, 'paypal', 'completed', 'TXN005', '2026-05-09 13:05:00'),
  (6, 6, 79.99, 'credit_card', 'pending', 'TXN006', '2026-05-10 14:20:00'),
  (7, 7, 69.98, 'debit_card', 'processing', 'TXN007', '2026-05-11 15:35:00'),
  (8, 8, 109.98, 'credit_card', 'completed', 'TXN008', '2026-05-12 16:50:00'),
  (9, 9, 199.97, 'paypal', 'pending', 'TXN009', '2026-05-13 17:05:00'),
  (10, 10, 439.98, 'credit_card', 'completed', 'TXN010', '2026-05-14 18:20:00');

--
-- Data for table `shipments`
--
INSERT INTO `shipments` (`shipment_id`, `order_id`, `warehouse_id`, `tracking_number`, `shipped_date`, `estimated_delivery_date`, `status`) VALUES
  (1, 1, 1, 'SHIP001', '2026-05-05 10:00:00', '2026-05-08 00:00:00', 'delivered'),
  (2, 2, 2, 'SHIP002', '2026-05-06 11:00:00', '2026-05-10 00:00:00', 'delivered'),
  (3, 3, 3, 'SHIP003', '2026-05-07 12:00:00', '2026-05-11 00:00:00', 'in_transit'),
  (4, 4, 4, 'SHIP004', '2026-05-08 13:00:00', '2026-05-12 00:00:00', 'in_transit'),
  (5, 5, 5, 'SHIP005', '2026-05-09 14:00:00', '2026-05-13 00:00:00', 'delivered'),
  (6, 6, 1, 'SHIP006', '2026-05-10 15:00:00', '2026-05-14 00:00:00', 'processing'),
  (7, 7, 2, 'SHIP007', '2026-05-11 16:00:00', '2026-05-15 00:00:00', 'processing'),
  (8, 8, 3, 'SHIP008', '2026-05-12 17:00:00', '2026-05-16 00:00:00', 'delivered'),
  (9, 9, 4, 'SHIP009', '2026-05-13 18:00:00', '2026-05-17 00:00:00', 'in_transit'),
  (10, 10, 5, 'SHIP010', '2026-05-14 19:00:00', '2026-05-18 00:00:00', 'delivered');

--
-- Data for table `activity_logs`
--
INSERT INTO `activity_logs` (`log_id`, `user_id`, `action`, `description`, `ip_address`, `created_at`) VALUES
  (1, 1, 'login', 'User logged in', '192.168.1.100', '2026-05-15 08:00:00'),
  (2, 2, 'login', 'User logged in', '192.168.1.101', '2026-05-15 08:15:00'),
  (3, 1, 'order_placed', 'User placed order #1', '192.168.1.100', '2026-05-15 08:30:00'),
  (4, 3, 'login', 'User logged in', '192.168.1.102', '2026-05-15 09:00:00'),
  (5, 2, 'product_viewed', 'User viewed product #3', '192.168.1.101', '2026-05-15 09:20:00'),
  (6, 4, 'login', 'User logged in', '192.168.1.103', '2026-05-15 10:00:00'),
  (7, 5, 'order_placed', 'User placed order #5', '192.168.1.104', '2026-05-15 10:30:00'),
  (8, 3, 'logout', 'User logged out', '192.168.1.102', '2026-05-15 11:00:00'),
  (9, 6, 'payment_processed', 'Payment processed for order #6', '192.168.1.105', '2026-05-15 11:45:00'),
  (10, 7, 'login', 'User logged in', '192.168.1.106', '2026-05-15 12:15:00');
