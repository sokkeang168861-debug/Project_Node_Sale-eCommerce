-- Create inventories table
CREATE TABLE IF NOT EXISTS inventories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    warehouse_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    stock_quantity INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_warehouse_product (warehouse_id, product_id),
    INDEX idx_warehouse_id (warehouse_id),
    INDEX idx_product_id (product_id),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
