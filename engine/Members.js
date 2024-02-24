import prisma from "@/engine/Prisma";

/**
 * Creates a new member in the database.
 * @param {Object} data - The data for the new member.
 * @returns {Promise<Object>} A promise that resolves with the created member object.
 */
export async function createMember(data) {
  return prisma.member.create({ data });
}

/**
 * Retrieves a member from the database by their unique identifier.
 * @param {string|number} id - The unique ID of the member to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves with the member object if found, otherwise null.
 */
export async function readMember(id) {
  return prisma.member.findUnique({ where: { id } });
}

/**
 * Updates an existing member's information in the database.
 * @param {string|number} id - The unique ID of the member to update.
 * @param {Object} data - An object containing the member's updated data.
 * @returns {Promise<Object>} A promise that resolves with the updated member object.
 */
export async function updateMember(id, data) {
  return prisma.member.update({ where: { id }, data });
}

/**
 * Deletes a member from the database by their unique identifier.
 * @param {string|number} id - The unique ID of the member to delete.
 * @returns {Promise<Object>} A promise that resolves with the deleted member object.
 */
export async function deleteMember(id) {
  return prisma.member.delete({ where: { id } });
}

/**
 * Retrieves a list of all members from the database.
 * @returns {Promise<Array>} A promise that resolves with an array of member objects.
 */
export async function listMembers() {
  return prisma.member.findMany();
}

