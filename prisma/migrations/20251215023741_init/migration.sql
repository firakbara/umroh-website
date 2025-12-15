-- CreateTable
CREATE TABLE `Package` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `duration` VARCHAR(50) NOT NULL,
    `price` DECIMAL(12, 2) NOT NULL,
    `hotel` TEXT NOT NULL,
    `airline` VARCHAR(200) NOT NULL,
    `facilities` JSON NOT NULL,
    `quota` INTEGER NOT NULL DEFAULT 0,
    `image` VARCHAR(500) NULL,
    `departureDate` DATE NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Package_slug_key`(`slug`),
    INDEX `Package_slug_idx`(`slug`),
    INDEX `Package_isActive_idx`(`isActive`),
    INDEX `Package_departureDate_idx`(`departureDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderNumber` VARCHAR(50) NOT NULL,
    `packageId` INTEGER NOT NULL,
    `packageTitle` VARCHAR(255) NOT NULL,
    `packagePrice` DECIMAL(12, 2) NOT NULL,
    `packageDuration` VARCHAR(50) NULL,
    `fullName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(20) NOT NULL,
    `totalPassengers` INTEGER NOT NULL DEFAULT 1,
    `notes` TEXT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Order_orderNumber_key`(`orderNumber`),
    INDEX `Order_orderNumber_idx`(`orderNumber`),
    INDEX `Order_status_idx`(`status`),
    INDEX `Order_createdAt_idx`(`createdAt`),
    INDEX `Order_packageId_idx`(`packageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Popup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `image` VARCHAR(500) NULL,
    `ctaText` VARCHAR(100) NULL,
    `ctaLink` VARCHAR(500) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `startDate` DATE NULL,
    `endDate` DATE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Popup_isActive_idx`(`isActive`),
    INDEX `Popup_startDate_endDate_idx`(`startDate`, `endDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(255) NULL,
    `tagline` VARCHAR(255) NULL,
    `address` TEXT NULL,
    `phone` VARCHAR(20) NULL,
    `whatsapp` VARCHAR(20) NULL,
    `email` VARCHAR(255) NULL,
    `instagram` VARCHAR(100) NULL,
    `facebook` VARCHAR(100) NULL,
    `aboutUs` TEXT NULL,
    `logo` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `Package`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
