import {
  Card,
  Avatar,
  Text,
  Badge,
  Group,
  Box,
  Button,
  Grid,
} from "@mantine/core";
import { IconFlag2Filled } from "@tabler/icons-react";

const TodoCard = ({ title, priority, due_date, is_completed, daysLeft }) => {
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
            <Avatar color="gray" radius="xl">
              <IconFlag2Filled size="1rem" />
            </Avatar>
            <Badge>{daysLeft} days left</Badge>
          </Group>
          <Text fz="lg" fw={500} mt="md">
            {title}
          </Text>
          <Text size="sm" color="dimmed" mt={5}>
            Due Date: {due_date.toLocaleDateString()}
          </Text>
        </div>
        <Box mt={20}>
          <Button fullWidth variant="outline">
            Mark as done
          </Button>
        </Box>
      </Card>
    </Grid.Col>
  );
};

export default TodoCard;
