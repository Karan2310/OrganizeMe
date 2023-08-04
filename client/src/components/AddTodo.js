import React, { useState } from "react";
import { Modal, Group, Button, TextInput, Select } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { useCookies } from "react-cookie";
import axios from "axios";
import { SERVER_URL } from "../config";

const AddTodo = ({ change, setChange }) => {
  const [opened, setOpened] = useState(false);
  const [cookies] = useCookies(["userId"]);
  const [loading, setLoading] = useState(false);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const form = useForm({
    initialValues: {
      title: "",
      priority: "low",
      due_date: tomorrow.toISOString(),
      is_completed: false,
    },

    validate: {
      title: (value) =>
        value.trim().length >= 2 ? null : "Invalid Todo (Min. 2 letters)",
      due_date: (value) => {
        const selectedDate = new Date(value);
        const selectedDateWithoutTime = new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate()
        );

        const todayWithoutTime = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        );

        const isDueDateValid = selectedDateWithoutTime >= todayWithoutTime;

        return isDueDateValid ? null : "Due date should be today or later";
      },
    },
  });

  const formatDateToISO = (date) => {
    return new Date(date).toISOString();
  };

  const handleDueDateChange = (newDate) => {
    form.setFieldValue("due_date", formatDateToISO(newDate));
  };

  const addBlog = async (value) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${SERVER_URL}/todos/${cookies.userId}`,
        value
      );
      setChange(!change);
    } catch (err) {
      alert("Error adding blog, try again");
      console.log(err);
    }
    setLoading(false);
    setOpened(false);
    form.reset();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnEscape={false}
        title="Add Todo"
        zIndex={100}
        portal="true"
        sx={{
          ".mantine-Modal-content": {
            overflowY: "visible",
          },
        }}
      >
        <form onSubmit={form.onSubmit((values) => addBlog(values))}>
          <TextInput
            data-autofocus
            withAsterisk
            label="Todo"
            placeholder="Enter Your Todo here"
            {...form.getInputProps("title")}
            error={form.errors.title}
          />
          <Select
            style={{ zIndex: "10" }}
            mt={10}
            label="Enter Todo Priority"
            placeholder="Pick one"
            value={form.values.priority}
            onChange={(value) => {
              form.setFieldValue("priority", value);
            }}
            data={[
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
            position="bottom"
          />

          <DateInput
            mt={10}
            value={new Date(form.values.due_date)}
            onChange={handleDueDateChange}
            label="Enter Due Date"
            placeholder="Date input"
            maw={400}
            mx="auto"
            position="bottom"
            inputformat="yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
            error={form.errors.due_date}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>

      <Group position="center">
        <Button
          onClick={() => setOpened(true)}
          style={{
            position: "absolute",
            right: "6vw",
            bottom: "6vh",
            zIndex: 100,
            height: "60px",
            width: "60px",
            aspectRatio: 1,
            borderRadius: "50%",
            padding: "1rem",
          }}
        >
          <IconPlus size="2rem" />
        </Button>
      </Group>
    </>
  );
};

export default AddTodo;
