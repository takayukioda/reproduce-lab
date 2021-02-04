reproduce-lab
=====

Sandbox repository whenever I want reproduce some issue in nice simple form

Clone specific directry only
-----

I put all reproducing projects in this repository to avoid messing my github repositories, but it's also not friendly for users who want to download and test my specific project.
Here's the git command I found to download git repository partially.

```shell
$ git clone \
      --depth 1  \
      --filter=blob:none  \
      --sparse \
      https://github.com/takayukioda/reproduce-lab
$ cd reproduce-lab
$ git sparse-checkout init --cone
$ git sparse-checkout set ${target_directory}
```

Reference: https://stackoverflow.com/a/52269934
