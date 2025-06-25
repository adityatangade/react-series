-- Insert sample addresses
INSERT INTO addresses (city, country, state, street) VALUES
('Mumbai', 'India', 'Maharashtra', '123 Seaside Drive'),
('Delhi', 'India', 'Delhi', '456 Metro Lane'),
('Bangalore', 'India', 'Karnataka', '789 Garden Street'),
('Pune', 'India', 'Maharashtra', '321 Tech Park Road'),
('Gurgaon', 'India', 'Haryana', '555 Luxury Lane'),
('Chennai', 'India', 'Tamil Nadu', '777 Student Street');

-- Insert sample amenities
INSERT INTO amenities (name) VALUES
('WiFi'),
('AC'),
('Parking'),
('Security'),
('Kitchen'),
('Laundry'),
('Gym'),
('Pool'),
('Garden'),
('Meals'),
('Study Area');

-- Insert sample properties
INSERT INTO properties (name, type, rent, location_url, address_id, gender, furnish) VALUES
('Ocean View Apartment', 'FLAT', 25000.00, 'https://goo.gl/maps/example', 1, 'ANY', 'FURNISHED'),
('Cozy Studio Near Metro', 'STUDIO', 18000.00, 'https://goo.gl/maps/example2', 2, 'FEMALE', 'SEMI_FURNISHED'),
('Spacious 2BHK', 'FLAT', 35000.00, 'https://goo.gl/maps/example3', 3, 'ANY', 'FURNISHED'),
('Modern PG for Working Professionals', 'PG', 12000.00, 'https://goo.gl/maps/example4', 4, 'MALE', 'FURNISHED'),
('Luxury Villa Room', 'ROOM', 28000.00, 'https://goo.gl/maps/example5', 5, 'ANY', 'FURNISHED'),
('Budget Friendly Shared Room', 'SHARED', 8000.00, 'https://goo.gl/maps/example6', 6, 'FEMALE', 'SEMI_FURNISHED');

-- Insert sample property images
INSERT INTO property_images (property_id, image_url, is_primary) VALUES
(1, 'http://example.com/image1.jpg', TRUE),
(1, 'http://example.com/image2.jpg', FALSE),
(1, 'http://example.com/image3.jpg', FALSE),
(2, 'http://example.com/studio1.jpg', TRUE),
(2, 'http://example.com/studio2.jpg', FALSE),
(3, 'http://example.com/flat1.jpg', TRUE),
(3, 'http://example.com/flat2.jpg', FALSE),
(3, 'http://example.com/flat3.jpg', FALSE),
(4, 'http://example.com/pg1.jpg', TRUE),
(5, 'http://example.com/villa1.jpg', TRUE),
(5, 'http://example.com/villa2.jpg', FALSE),
(6, 'http://example.com/shared1.jpg', TRUE);

-- Insert property amenities relationships
INSERT INTO property_amenities (property_id, amenity_id) VALUES
-- Ocean View Apartment amenities
(1, 1), (1, 2), (1, 3), (1, 4),
-- Cozy Studio amenities  
(2, 1), (2, 5), (2, 6),
-- Spacious 2BHK amenities
(3, 1), (3, 2), (3, 7), (3, 8), (3, 3),
-- Modern PG amenities
(4, 1), (4, 10), (4, 6), (4, 4),
-- Luxury Villa Room amenities
(5, 1), (5, 2), (5, 8), (5, 7), (5, 9), (5, 3),
-- Budget Shared Room amenities
(6, 1), (6, 5), (6, 11);

-- Insert sample users
INSERT INTO users (email, name, phone, user_type) VALUES
('john.doe@example.com', 'John Doe', '+91-9876543210', 'TENANT'),
('jane.smith@example.com', 'Jane Smith', '+91-9876543211', 'OWNER'),
('admin@roomfinder.com', 'Admin User', '+91-9876543212', 'ADMIN');
