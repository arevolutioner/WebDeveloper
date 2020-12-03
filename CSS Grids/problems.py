def two_sum(self, nums, target):
    num_set = {}
    for num_index, num in enumerate(nums):
        if (target-num) in num_set:
            return [num_set[target-num], num_index]
        num_set[num] = num_index


print(two_sum([2,4,7,9,5], 9))