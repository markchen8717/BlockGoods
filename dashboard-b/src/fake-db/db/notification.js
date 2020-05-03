import Mock from "../mock";
import shortId from "shortid";

const NotificationDB = {
  list: [
    {
      id: shortId.generate(),
      heading: "Message",
      icon: {
        name: "chat",
        color: "primary"
      },
      timestamp: 1570702802573,
      title: "New message from Mark",
      subtitle: "Hey, I'm interested in purchasing from you.",
      path: "chat"
    },
    {
      id: shortId.generate(),
      heading: "Alert",
      icon: {
        name: "notifications",
        color: "error"
      },
      timestamp: 1570702702573,
      title: "Orders Have Been Shipped",
      subtitle: "Your past 25 orders have been shipped",
      path: "page-layouts/user-profile"
    },
    {
      id: shortId.generate(),
      heading: "Message",
      icon: {
        name: "chat",
        color: "primary"
      },
      timestamp: 1570502502573,
      title: "New message from Eric",
      subtitle: "Hello, can I buy things from you?",
      path: "chat"
    }
  ]
};

Mock.onGet("/api/notification").reply(config => {
  const response = NotificationDB.list;
  return [200, response];
});

Mock.onPost("/api/notification/add").reply(config => {
  const response = NotificationDB.list;
  return [200, response];
});

Mock.onPost("/api/notification/delete").reply(config => {
  let { id } = JSON.parse(config.data);
  console.log(id);

  const response = NotificationDB.list.filter(
    notification => notification.id !== id
  );
  NotificationDB.list = [...response];
  return [200, response];
});

Mock.onPost("/api/notification/delete-all").reply(config => {
  NotificationDB.list = [];
  const response = NotificationDB.list;
  return [200, response];
});
