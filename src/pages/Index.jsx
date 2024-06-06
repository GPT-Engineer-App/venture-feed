import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Select, Box, IconButton, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Badge, Avatar } from "@chakra-ui/react";
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
    <Container maxW="container.lg" py={4} bg="gray.50">
      <VStack spacing={4}>
        <Select placeholder="Select Industry of Focus" value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} bg="white">
          <option value="tech">Tech</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance</option>
          <option value="agriculture">Agriculture</option>
        </Select>
        <Tabs variant="soft-rounded" width="100%">
          <TabList>
            <Tab>Projects Feed</Tab>
            <Tab>Dashboard</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4} align="stretch">
                {projects.map((project) => (
                  <Box key={project.id} p={4} borderWidth="1px" borderRadius="lg" bg="white">
                    <HStack justifyContent="space-between">
                      <HStack>
                        <Avatar name={project.title} />
                        <Text fontSize="lg" fontWeight="bold">
                          {project.title}
                        </Text>
                      </HStack>
                      <HStack>
                        <IconButton aria-label="Upvote" icon={<FaThumbsUp />} variant="ghost" />
                        <IconButton aria-label="Downvote" icon={<FaThumbsDown />} variant="ghost" />
                      </HStack>
                    </HStack>
                    <Text mt={2}>{project.description}</Text>
                    <HStack spacing={4} mt={4}>
                      <Input placeholder="Add a comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} bg="gray.100" />
                      <Button leftIcon={<FaCommentDots />} onClick={() => handleAddComment(project.id)} colorScheme="twitter">
                        Comment
                      </Button>
                    </HStack>
                    <VStack align="start" mt={4}>
                      {comments[project.id] &&
                        comments[project.id].map((comment, index) => (
                          <Text key={index} p={2} borderWidth="1px" borderRadius="md" bg="gray.100">
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
                  <Box key={project.id} p={4} borderWidth="1px" borderRadius="lg" bg="white">
                    <Text fontSize="lg" fontWeight="bold">
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
