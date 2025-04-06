package com.startupfundr.api.service;

import com.startupfundr.api.model.Notification;
import com.startupfundr.api.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;

    @Autowired
    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public List<Notification> getUserNotifications(String userId) {
        return notificationRepository.findByUserId(userId);
    }

    public Notification saveNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    public void markAsRead(String id) {
        Notification notification = notificationRepository.findById(id).orElse(null);
        if (notification != null) {
            notification.setRead(true);
            notificationRepository.save(notification);
        }
    }
}
