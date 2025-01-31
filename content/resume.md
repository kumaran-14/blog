+++
draft = false
title = 'Resume'
description = "Summary of my work experience."
+++
I’m an software engineer with broad interests in databases, storage & distributed systems. Recently I've been getting into AI/ML.

Take a look at my [CV](/blog/files/resume.pdf): I'm all about high availability.

# Professional Experience 
Got paid to write code for about 3 years so far.
{{< p_indent >}}
### SDE II - Payments team @ slice (Jan 2022 - Aug 2024)
[ FedNow ](https://en.wikipedia.org/wiki/FedNow) was inspirired by India's UPI

Java, Golang, Kafka, AWS Aurora Postgres, Envoy
{{< details Hightlights>}} 
<!-- <summary> asdf</summary> -->
* Built and deployed UPI-Switch as a middleware system to facilitate real-time payments by integrating with National Payments Corporation of India's (NPCI) UPI network to handle **20M monthly transactions** and **INR 40B TPV**, ensuring compliance, reliability, and scalability.
* Architected a multi-region payment network infrastructure using Kafka, AWS Transit Gateway and Site-to-Site VPN, to enable active-active failover, ensuring four nines (99.99\%) of availability and fault tolerance.

{{< /details >}}
### SDE II - Infrastructure and Platform team @ slice (May 2022 - Dec 2023)
Too many technologies to list, atleast few dozen out of 200+ AWS services and everything in K8S you can think of and more.

{{< details Hightlights>}} 

* Led the migration from ECS to EKS, designing and building a production-grade Kubernetes cluster with 100+ instances to support 140+ microservices. Integrated tools like Karpenter for horizontal scaling, ArgoCD for GitOps-based deployment automation, VictoriaMetrics for monitoring, Istio for service mesh, and GitHub Actions Runner for CI/CD automation.

* Revamped CI testing infrastructure by using GitHub Actions to orchestrate PR workflows, utilizing VCluster and Devspace to provision test compute and storage infrastructure, run tests, and manage dependencies. Achieved significant reductions in build times, and enabled scalable management of dependencies, enhancing overall development efficiency. ([Something similar](https://www.youtube.com/watch?v=f-w5Nh92dt8))

* Led initiative to adopt Elastic APM and improve monitoring and troubleshooting capabilities. Leveraged distributed tracing and logs-traces correlation to reduce MTTR for production incidents by 70\%.
* Architected a gateway edge proxy service using Envoy to support 5M+ users while ensuring high performance and low latency. Implemented rate limiting using Redis to achieve peak throughput of over 1M requests per minute. Replaced AWS ALBs and Privatelink with Envoy based systems and saved \$100K in annual cloud costs.

{{< /details >}}

### SDE I - Infrastructure and Platform team @ slice (June 2021 - April 2022)

{{< details Hightlights>}} 
* Designed and developed [Photon](https://engineering.sliceit.com/photon-the-swiss-army-knife-for-deployments-985c598131bd), a declarative tool for managing stateless microservice on AWS Fargate, enabling seamless cloud infrastructure management. Used 150K times in CI/CD pipelines to support 100+ microservices. 
* Directed and executed the development of [ Hercules]( https://engineering.sliceit.com/hercules-the-job-scheduler-1b345f9457de ), a powerful declarative stateless container job scheduling framework capitalizing on AWS Fargate and AWS EventBridge. Increased developer productivity by removing the overhead of job management while adding observability features,
           enabling efficient troubleshooting capabilities and capacity planning.
           Integration of data management apps with Hercules drove 400+ cron workload migrations by internal teams.
### SDE Intern @ Fidelity Investments (Summer 2020)
* Devised an application to find, report and fix data discrepancies between Fidelity’s data
          warehouse, DIPIT and ServiceNow, the IT management SaaS application operated within the company, in 100+ tables.
* Created a scheduled job using ServiceNow Dashboard, synchronizing data sources. The application was deployed and tested successfully in the UAT environment.

{{< /details >}}
{{< /p_indent >}}
## Projects
{{< p_indent >}}
#### [ CodeCharacter](https://delta.nitt.edu/projects/code-character)
AI programming contest
{{< details Hightlights>}} 
* Created an AI programming challenge where players used a high-level API to control troops and battle opponents
in a real-time strategy game, attracting 1,300+ participants and over 10,000 matches from 70+ countries.
* Engineered a multi-threaded C++ game engine, implemented character transitions using finite state machines, A*,
and waypoint graph-based path planning for agents, and executed LLVM/Clang compiler passes to enforce
instruction counts limits.
* Built a web app with React and TypeScript to handle user registrations, code submissions, and render match
simulations with Pixi.Js.

{{< /details >}}

#### [Scholarship Portal - NIT-Trichy ](https://www.linkedin.com/in/kumaran-gowrisankar-53969616a/)
{{< details Hightlights>}} 
* Designed and implemented a scholarship portal to simplify application management for students and streamline
review and approval for administrators.
* Leveraged Node.js, MongoDB, and Pug.js to support a scholarship portal used by over 4000 students.

{{< /details >}}
{{< /p_indent >}}
### Open-Source
I donate code, not just complaints.
* [Xterm.js](https://github.com/xtermjs/xterm.js/commits?author=kumaran-14) - The integrated terminal of VSCode. Yes, my code is used in an app used by millions of developers every day, very scary!
 
### Educatiwon
* Master of Computer Science @ Texas A&M University '26
* Bachelor of Technology, National Institute of Technology, Trichy '21

