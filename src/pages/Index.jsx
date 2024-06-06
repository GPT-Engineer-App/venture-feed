import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Select, Box, IconButton, Input, Textarea, Tab, TabList, TabPanel, TabPanels, Tabs, Badge } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown, FaCommentDots } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "An innovative solution for urban farming.",
    traction: {
      potentialUsers: 5000,
      potentialCustomers: 200,
      fans: 1500,
    },
    whyNow: "Increasing urbanization and demand for fresh produce.",
    whyThisTeam: "Experienced in agriculture and technology.",
    interestedVCs: ["VC Firm A", "VC Firm B"],
  },
  {
    id: 2,
    title: "Project Beta",
    description: "A new way to manage personal finances.",
    traction: {
      potentialUsers: 10000,
      potentialCustomers: 500,
      fans: 3000,
    },
    whyNow: "Growing interest in personal finance management.",
    whyThisTeam: "Strong background in finance and app development.",
    interestedVCs: ["VC Firm C", "VC Firm D"],
  },
];

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (projectId, value) => {
    setComments({ ...comments, [projectId]: value });
  };

  const handleAddComment = (projectId) => {
    if (newComment.trim()) {
      setComments({ ...comments, [projectId]: [...(comments[projectId] || []), newComment] });
      setNewComment("");
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontWeight="bold">
          VC Platform
        </Text>
        <Select placeholder="Select Industry of Focus" value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)}>
          <option value="tech">Tech</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance</option>
          <option value="agriculture">Agriculture</option>
        </Select>
        <Tabs variant="enclosed" width="100%">
          <TabList>
            <Tab>Projects Feed</Tab>
            <Tab>Dashboard</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4} align="stretch">
                {projects.map((project) => (
                  <Box key={project.id} p={4} borderWidth="1px" borderRadius="lg">
                    <HStack justifyContent="space-between">
                      <Text fontSize="2xl" fontWeight="bold">
                        {project.title}
                      </Text>
                      <HStack>
                        <IconButton aria-label="Upvote" icon={<FaThumbsUp />} />
                        <IconButton aria-label="Downvote" icon={<FaThumbsDown />} />
                      </HStack>
                    </HStack>
                    <Text>{project.description}</Text>
                    <HStack spacing={4} mt={4}>
                      <Button leftIcon={<FaCommentDots />} onClick={() => handleAddComment(project.id)}>
                        Comment
                      </Button>
                      <Input placeholder="Add a comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                    </HStack>
                    <VStack align="start" mt={4}>
                      {comments[project.id] &&
                        comments[project.id].map((comment, index) => (
                          <Text key={index} p={2} borderWidth="1px" borderRadius="md">
                            {comment}
                          </Text>
                        ))}
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4} align="stretch">
                {projects.map((project) => (
                  <Box key={project.id} p={4} borderWidth="1px" borderRadius="lg">
                    <Text fontSize="2xl" fontWeight="bold">
                      {project.title}
                    </Text>
                    <Text mt={2}>
                      <strong>Why Now:</strong> {project.whyNow}
                    </Text>
                    <Text mt={2}>
                      <strong>Why This Team:</strong> {project.whyThisTeam}
                    </Text>
                    <Text mt={2}>
                      <strong>Interested VCs:</strong> {project.interestedVCs.join(", ")}
                    </Text>
                    <HStack mt={4}>
                      <Badge colorScheme="green">Potential Users: {project.traction.potentialUsers}</Badge>
                      <Badge colorScheme="blue">Potential Customers: {project.traction.potentialCustomers}</Badge>
                      <Badge colorScheme="purple">Fans: {project.traction.fans}</Badge>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default Index;
