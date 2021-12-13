import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import ReviewModal from './components/ReviewModal';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

const TaskAdderProject = () => {
  const [tasks, setTasks] = useState([]);
  const [enteredTask, setEnteredTask] = useState('');
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputTask = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const handleTask = () => {
    // it is necessary to add key as a string, because Flatlist component will use it to add key in our list item. we can use id or anything else instead of key, but for that we have to configure an attribute inside FlatList named keyExtractor
    setTasks([...tasks, { key: Math.random().toString(), value: enteredTask }]);
    setEnteredTask('');
  };

  const removeTask = (key) => {
    const newTasks = tasks.filter((task) => task.key !== key);
    setTasks(newTasks);
  };

  const handleAddReview = (review) => {
    setReviews([...reviews, { id: Math.random().toString(), review }]);
    setIsModalOpen(false);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <View>
      {/* take the task input from user */}
      <View style={styles.layout}>
        <TaskInput
          handleInputTask={handleInputTask}
          enteredTask={enteredTask}
        />
        <Button title="add task" onPress={handleTask} />
      </View>

      {/* review adding button with modal */}
      <View>
        <ReviewModal
          isModalOpen={isModalOpen}
          handleAddReview={handleAddReview}
          handleModal={handleModal}
        />
        <View style={styles.reviewBtn}>
          <Button title="add review" onPress={handleModal} />
        </View>
      </View>

      {/* show the tasks to user */}
      <Text style={styles.heading}>Tasks</Text>
      {tasks.length !== 0 ? (
        <FlatList
          // keyExtractor={item => itme.id} not necessary if we have key as a unique indentifier in our key
          data={tasks}
          renderItem={(itemData) => (
            <TaskItem
              onDelete={() => removeTask(itemData.item.key)}
              item={itemData.item.value}
            />
          )}
        />
      ) : (
        <Text>you have no tasks</Text>
      )}
      {/* show the reviews to user */}
      <Text style={{ ...styles.heading, marginTop: 20 }}>Reviews</Text>

      {reviews.length !== 0 ? (
        <FlatList
          keyExtractor={(item) => item.id}
          data={reviews}
          renderItem={(itemData) => (
            <View>
              <Text>{itemData.item.review}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No reviews available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewBtn: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default TaskAdderProject;
