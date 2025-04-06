package com.startupfundr.api.controller;

import com.startupfundr.api.model.Notification;
import com.startupfundr.api.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/user/{userId}")
    public List<Notification> getUserNotifications(@PathVariable String userId) {
        return notificationService.getUserNotifications(userId);
    }

    @PostMapping
    public Notification saveNotification(@RequestBody Notification notification) {
        return notificationService.saveNotification(notification);
    }

    @PutMapping("/read/{id}")
    public void markAsRead(@PathVariable String id) {
        notificationService.markAsRead(id);
    }
}
