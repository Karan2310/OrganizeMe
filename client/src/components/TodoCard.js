import {
  Card,
  Avatar,
  Text,
  Badge,
  Group,
  Box,
  Button,
  Grid,
  ActionIcon,
} from "@mantine/core";
import { IconFlag2Filled, IconTrash } from "@tabler/icons-react";

const TodoCard = ({ title, priority, due_date, is_completed, daysLeft }) => {
  let badgeContent;
  switch (true) {
    case daysLeft < 0 && is_completed === false:
      badgeContent = <Badge color="red">OVERDUE</Badge>;
      break;
    case daysLeft > 0 && is_completed === true:
      badgeContent = <Badge color="gray">Completed</Badge>;
      break;
    case daysLeft < 0:
      badgeContent = <Badge color="gray">{Math.abs(daysLeft)} days ago</Badge>;
      break;
    case daysLeft === 0:
      badgeContent = <Badge color="yellow">DUE Today</Badge>;
      break;
    default:
      badgeContent = <Badge color="green">{daysLeft} days left</Badge>;
      break;
  }

  let priorityContent;
  switch (true) {
    case priority == "high":
      priorityContent = "red";
      break;
    case priority == "medium":
      priorityContent = "yellow";
      break;
    default:
      priorityContent = "green";
      break;
  }

  return (
    <Grid.Col xs={12} md={6} lg={4}>
      <Card
        withBorder
        padding="lg"
        radius="md"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Group position="apart">
            <Avatar color={priorityContent} radius="xl">
              <IconFlag2Filled size="1rem" />
            </Avatar>
            <div style={{ display: "flex", alignItems: "center" }}>
              {badgeContent}

              {!is_completed && (
                <ActionIcon color="red" size={"1.6rem"} ml={10} p={3}>
                  <IconTrash />
                </ActionIcon>
              )}
            </div>
          </Group>
          <Text fz="lg" fw={500} mt="md">
            {title}
          </Text>
          <Text size="sm" color="dimmed" mt={5} fw={500}>
            Due Date: {new Date(due_date).toLocaleDateString()}
          </Text>
        </div>
        <Box mt={20}>
          <Button
            fullWidth
            variant="outline"
            color={is_completed == false ? "blue" : "red"}
          >
            {is_completed == false ? "Mark as done" : "Delete"}
          </Button>
        </Box>
      </Card>
    </Grid.Col>
  );
};

export default TodoCard;
