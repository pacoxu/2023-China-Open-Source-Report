---
outline: deep
---

# 数据篇

## 概述

2023 年中国开源年度报告以深入全面的数据洞察为基础，共分为八个部分。第一部分总体宏观洞察通过对基础事件、活跃仓库、活跃用户、开源许可证和编程语言等方面的深入分析，揭示中国在全球开源生态中的全貌。第二部分 OpenRank 排行榜，提供了全球和中国各领域开源项目、企业、基金会、开发者以及协作机器人的排名，为业界提供全面系统的信息服务。第三部分技术领域洞察，深入研究了各领域 Top10 榜单和项目变化趋势，展示了前沿技术的发展方向。第四和第五部分为企业洞察和基金会洞察，通过演变图和趋势分析，呈现了全球和中国企业、基金会在开源领域中的不断演化。第六部分开源项目洞察，深入探讨了不同项目类型、领域和主题的多样性和创新方向。第七部分开发者洞察，则通过对开发者类型、工作时间分布、地区分布和机器人使用情况的分析，展现了开发者群体的多样性和工作特征。第八部分案例分析，通过深入挖掘开源社区、企业和开发者的具体案例，总结了一系列有趣的数据现象，为读者提供了对开源生态的深刻洞见。整体而言，报告以丰富多彩的数据洞察与分析，勾勒出中国开源生态在 2023 年的全景。

### 指标介绍

**OpenRank**

OpenRank 指标是由 X-lab 实验室研发的，基于开源开发者 - 项目协作关系构建的协作网络下的网络指标。OpenRank 不仅能够很好的表征项目的整体发展状态、社区参与度，同时也引入了开源生态的要素，在开源生态中出于协作关键位置的项目也可以被很好的识别出来。

详细指标定义：https://blog.frankzhao.cn/how_to_measure_open_source_3

**活跃度（activity）**

活跃度是 X-lab 研发的评价项目或开发者活跃程度的统计性指标。开发者活跃度由开发者 Issue、PR 及代码 Review 等行为加权得到。项目活跃度由项目中所有开发者活跃度总和进行数值处理后得到。

详细定义请参考：https://blog.frankzhao.cn/how_to_measure_open_source_1

###

## 一. 总体宏观洞察

### 1.1 基础事件

#### 1.1.1 Github 全域事件趋势

首先，我们统计了全域 GitHub 事件⽇志数量。


![1-1](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-1.png)

<center>Github 年度事件数趋势 </center>

可以看到近⼏年全球开源的总体活跃情况和活跃仓库数量都在明显上升，显⽰了全球开源发展中的增速。2023 年 GitHub ⽇志数据达到了 14 亿，相⽐ 2022 年增⻓了约 10.32%。在经过了 2018 ~ 2020 的高增长后，GitHub 平台的年度事件增长数量逐渐下降，2023 年的增长率为 10% 左右。

#### 1.1.2 GitHub 和 Gitee 的总事件数趋势比较

由于 GitHub 平台活跃事件的庞大，我们接下来的分析工作，建立在每个平台的前 3 万个活跃仓库的基准之上。为了方便比较，我们选取了 Github 与 Gitee 中与开源参与相关性较大的八类事件进行统计分析。

![1-2](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-2.png)


<center>Github 与 Gitee 活跃仓库事件数 </center>

我们发现 Gitee 平台呈现更为显著的增长趋势。甚至在 2021 年，Gitee 平台的事件数量超越了 GitHub，凸显了国内活跃开源项目的爆发态势。这反映了国内开发者积极参与和贡献到开源社区的热情，为技术创新和知识共享注入了新的活力。

然而，需要强调的是，单纯依靠前 3 万个活跃项目的数据无法完全揭示全球 GitHub 平台的真实情况，因为长尾效应在全球范围内仍然非常明显。这一点将在后续的分析中更为清晰地体现出来，展现出 GitHub 平台作为全球领先的开源社区的广泛和多样性。在未来，随着技术的不断演进和开源文化的推动，我们可以期待开源社区在全球范围内继续蓬勃发展，为创新和协作搭建更加坚实的基础。

![1-3](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-3.png)


<center>Github 与 Gitee 活跃仓库事件类型对比 </center>

进一步，从细分的基础事件数据分析可以看到：

在 GitHub 平台上，最多的事件类型是 Push 事件，PullRequest 事件和 IssueComment 事件分别居二三席。其中各个事件的发生次数占比基本上没有太大的变化，这体现出 GitHub 的开源生态模式在走向一个稳定的趋势。

在 Gitee 平台上，事件数据在 2018 年有极大的增加，最初以 Watch 事件为主。但在 2020 年后，PullRequest ReviewComment 事件开始快速增长，在 2022 年成为最多的事件类型，并且在 2023 年也有持续的增长。Gitee 事件数据的结构变化体现出 Gitee 还在不断发展中，期待 Gitee 平台的未来。

### 1.2 活跃仓库

#### 1.2.1 GitHub 全域活跃仓库数目趋势


![1-4](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-4.png)

<center>Github 年度活跃仓库数量趋势 </center>

2023 年总体数据来说，全域活跃仓库数量达到了 8792 万，比上一年增长了 4.06% 和总体事件趋势一样，在经过了 2018～2020 年的高增长后，开始逐年下降。这有可能和疫情以及全球经济发展的影响有关。

由于 GitHub 和 Gitee 仓库数量的偏差，接下来的分析工作，建立在每个平台前 3 万个活跃仓库的基准之上。

#### 1.2.2 GitHub 和 Gitee 总体活跃仓库活跃度趋势与对比


![1-5](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-5.png)



<center>Github 与 Gitee 活跃仓库活跃度对比 </center>

从每个平台前 3 万个活跃仓库的活跃度数据来看，Gitee 平台的总体活跃度从 2019 年开始迅速增长，并在 2022 年的的时候超越了 GitHub，且继续保持这高增长的趋势。

![1-6](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-6.png)

<center>Github 与 Gitee 活跃仓库活跃度组成对比 </center>

进一步，从细分的活跃度组成分析可以看到：

在 GitHub 平台中，创建 PR 事件的占比接近总活跃度事件的一半，合并 PR 事件接近四分之一。审查 PR 事件占 10%，issue 创建和评论事件接近，占
7%。

在 Gitee 平台中，审查 PR 事件最多，占了总活跃度事件的三分之二，合并 PR 事件和 GitHub 平台一样，排在次席，且占比也比较接近。让人感到惊讶的数据事实是，在 GitHub 平台里占比最高的创建 PR 事件，在 Gitee 平台里是占比最少的，只占了总活跃度事件的 2%。

#### 1.2.3 GitHub 和 Gitee 总体活跃仓库 OpenRank 趋势与对比

![1-7](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-7.png)

<center>Github 与 Gitee 活跃仓库 OpenRank 对比 </center>

从活跃仓库的总体 OpenRank 趋势分析可以看到，虽然 Gitee 的前 3 万仓库的活跃度在 2022 年甚至超越了 GitHub，但 OpenRank 的影响力差距还是较大（大约为 5 : 2）。不仅差距较大，趋势上看，也没有拉近的迹象，这一点尤其值得关注。

### 1.3 活跃用户

#### 1.3.1 GitHub 总体活跃用户数量趋势

![1-8](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-8.png)

<center>Github 年度活跃用户数量趋势 </center>

2023 年总体来说，全域活跃开发者数量达到了 2193 万，比上一年增长了 8.88%。和 GitHub 活跃仓库数据一样，在经过了近五年的高增长后，增长率在
2020 年开始逐年下降，可能 GitHub 平台的用户在慢慢接近饱和。

#### 1.3.2 活跃用户地理分布与排名

**全球开发者地域分布**

![1-9](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-9.png)


<center> 全球开发者地域分布 </center>

总体而言，各国的开发者都在不断增加，美国凭借强大的经济实力位居第一。印度和中国以及巴西依靠较大的人口基数和经济的迅速发展分别位居二三四位。值得一提的是，虽然欧洲各国的排名没有那么靠前，但是考虑到人口基数的原因，欧盟的开源开发者也是一股不小的势力。

**中国开发者地域分布**

![1-10](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-10.png)


<center> 中国开发者地域分布 </center>

中国的开发者分布主要和经济有关，经济强市北上广深所属的省份北京、上海、广东分别位居一二三位。浙江和江苏凭借着较高的经济水平和良好的区位因素也有较大的占比。

### 1.4 开源许可证

#### 1.4.1 使用开源许可证的仓库数量

![1-11](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-11.png)

<center> 使用开源许可证的仓库数量占比 </center>
<br><br>

我们统计了 GitHub 和 Gitee 的活跃仓库采用的开源许可证的数量，发现目前使用最多的开源许可证有 MIT 许可证、Apache 许可证 v2.0、GNU 通用公共许可证 v3.0、BSD 3-Clause 许可证。其中 MIT 许可证以接近 60% 的占比夺得头筹。MIT 许可证以麻省理工学院（Massachusetts Institute of Technology）为名，最早由该学院使用，因此得名。MIT 许可证的简洁和灵活性使其成为许多开发者选择的许可证之一。它提供了最小的法律限制，鼓励开发者自由地使用和传播软件。

#### 1.4.2 开源许可证种类变化趋势

![1-12](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-12.png)

<center> 开源许可证种类数量变化趋势 </center>

总体来看，开源许可证的种类在 2017 年以来不断增加。eclipse 公共许可证 2.0 和欧盟公共许可证 1.2 以及其他许可证的推出造成了 2017-2018 年的增长。在此之后开源许可证种类的增长速度放缓，在 2021 年至 2022 年间，一批新的开源许可证如木兰系列许可证、CERN（欧洲核子研究组织）许可证 v2 开始崭露头角。随后发展趋于稳定，目前许可证的种类也持续两年稳定在 46 个。

#### 1.4.3 使用开源许可证仓库数量变化趋势

根据日志数据显示，有接近 770 万个活跃仓库使用了开源许可证，其中由于 MIT 许可证强大的影响力，我们将其数据单独展示。

**使用 MIT 许可证仓库数量变化趋势**

![1-13](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-13.png)

<center> 使用 MIT 许可证的仓库数量变化趋势 </center>

MIT 许可证是最流行的开源许可证，在 2023 年，有 158 万个活跃仓库使用了该许可证。使用 MIT 许可证的仓库情况和总仓库数量情况变化趋势类似，都是有较大的增长，但是在 2022 年和 2023 年的增长速度有所减缓。

**其余前五的开源许可证数量变化趋势**

![1-14](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-14.png)

<center> 使用 其他许可证的仓库数量变化趋势 </center>

我们选取了除了 MIT 许可证以外排名前五的开源许可证展示。总体而言，各类开源许可证的数量都在增长，但是开源许可证种类的头牌依旧还是以
MIT、Apache、GNU 等为主，小众开源许可证和热门开源许可证的差异仍然存在。

#### 1.4.3 使用木兰系列许可证仓库数量变化趋势

![1-15](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_1/1-15.png)

<center> 使用木兰系列许可证的活跃仓库数量累加图 </center>

木兰系列许可证系列（包含 “木兰宽松许可证” 和“木兰公共许可证”等），均由北京大学作为牵头单位，依托全国信标委云计算标准工作组和中国开源云联盟，联合开源生态圈产学研优势团队和个体、尤其是开源法务和律师，起草、修订并发布。其中 Mulan PSL 是国内首个被 OSI 认定的“国产开源软件协议。

我们观测了 GitHub 中使用木兰许可证的活跃仓库（其中，活跃仓库是指仓库里有 issue 和 PR 或者有被用户标星等活动）的趋势，从 2022 年 9 月开始，使用木兰许可证的仓库开始增长。知道 2023 年 12 月，已有 220 个仓库采用木兰许可证。木兰许可证的影响力在逐渐展现，期待它以后的表现。

## 二. OpenRank 排行榜

### 2.1 全球开源项目 OpenRank 排名

![2-1](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_2/2-1.png)

<center> 全球开源项目 OpenRank 排名（Top 20）</center>

### 2.2 中国开源项目 OpenRank 排名

![2-2](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_2/2-2.png)

<center> 中国开源项目 OpenRank 排名（Top 20）</center>

### 2.3 全球企业 OpenRank 排名

![2-3](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_2/2-3.png)

<center> 全球企业 OpenRank 排名（Top 20）</center>

### 2.4 中国企业 OpenRank 排名

![2-4](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_2/2-4.png)

<center> 中国企业 OpenRank 排名（Top 20）</center>

### 2.5 全球基金会 OpenRank 排名

![2-5](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_2/2-5.png)

<center> 全球基金会 OpenRank 排名（Top 10）</center>

### 2.6 国家和地区 OpenRank 排名

![2-6](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_2/2-6.png)
<center> 国家和地区 OpenRank 排名（Top 20）</center>

### 2.7 全球开发者 OpenRank 排名

![2-7](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_2/2-7.png)
<center> 全球开发者 OpenRank 排名（Top 30）</center>

### 2.8 中国开发者 OpenRank 排名

![2-8](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_2/2-8.png)
<center> 中国开发者 OpenRank 排名（Top 30）</center>

## 三. 企业洞察

### 3.1 近 10 年全球企业 OpenRank 演变图

![3-1](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_3/3-1.png)

<center> 中国企业 OpenRank 排名变化 </center>

部分观察如下：

- 微软从十多年前（2008 年）开始布局开源，在 2016 年站到了全球开源影响力的巅峰，直到今天无人撼动；
- 2019 年，华为正式被美国制裁开始，将开源作为重要战略方向，一路飙升，并于今年完成了对 Google 和 Amazon 的超越；
- 阿里巴巴在 2021 年前，一直是国内开源的领先者，并至今稳居世界第六的排名；
- 蚂蚁集团在近三年的表现也是非常抢眼，并于 2023 年正式进入世界前十；
- 国内开源的第四大巨头百度，由于国内快速的开源态势变化，目前排名全球 12；
- 根据 OpenLeaderboard 榜单，进入全球前 30 的还有字节跳动（18）、PingCAP（19）、飞致云（24）、Deepin（25）、腾讯（26）、以及 Espressif（27）。

### 3.2 近 10 年中国企业 OpenRank 演变图

![3-2](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_3/3-2.png)

能够很好表现国内几家公司的开源战略：

- 华为 2019 年开始发力，仅用 2 年的时间就做到了国内第一，全球第二的位置；
- 阿里和蚂蚁作为国内老牌开源引领的企业，表现稳定；
- 百度则由于前面三家的竞争，滑落第四；
- 字节跳动则是近几年肉眼可见的进步神速；
- [Espressif](https://github.com/espressif)（乐鑫科技）则作为国内开源界相对低调的半导体开源王者；
- Fit2Cloud 则是作为另一家低调但非常务实的开源企业，旗下多款开源软件深受开发者喜爱；
- 腾讯、PingCAP、JD、TAOS 几家则是近两年肉眼可见的下跌趋势，也印证了后疫情时代的开源竞争将更加激烈。

### 3.3 中国企业在 GitHub/Gitee 平台上的 OpenRank 占比

<div align="center">
  <img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_3/3-3.png" alt="3-3" width="300px"/>
    <img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_3/3-4.png" alt="3-4" width="400px"/>
    
    
</div>

<center> 中国企业在全球企业中的 OpenRank 占比（左）和 中美企业在项目维度 OpenRank 上的对比（右）</center>

左图显示了中国企业在全球开源生态中的影响力不断上升的趋势，右图则体现了中美两国后贸易战时代的此消彼长的趋势，特别是疫情后，在华为等企业的拉动下，中国开源影响力上升明显；但同样可以看到，中美企业在整体开源影响力之间的差距还是比较明显的（大约 3 倍的差距），但这个未来的势头还是非常值得期待的~

## 四. 基金会洞察

本部分第一次从基金会这一维度，对开源生态的发展进行分析。由于 Linux Foundation 已经扩张成了一个超级基金会，旗下的子基金会作为独立一级标签和其他基金会做对比分析更有意义。

### 4.1 全球基金会 OpenRank 趋势分析



<div align=center>
<img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_4/4-1.png" width="700px">
</div>
<center> 全球基金会 OpenRank 整体变化趋势 </center>

可以看到如下趋势：

- ASF 以其成熟稳定的节奏发展，今天仍然是很多企业发展全球化项目的首选。
- 开放原子开源基金会，成立 3 年多以来发展迅速，旗下项目影响力总和超越 LF 旗下的各子基金，仅次于 ASF 排名第二。
- LF 的 AI & Data 子领域，由于近年人工智能的迅速发展，超过 CNCF 云原生领域排名第三。
- 其他的（子）基金会项目发展，总体来说均相对稳定。

### 4.2 全球基金会项目 OpenRank 趋势分析

<div align=center>
<img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_4/4-2.png" width="700px">
</div>
<center> 全球基金会项目 OpenRank 变化趋势 </center>

从全球基金会下的开源项目来看：

- LF 基金会云原生领域的代表性项目 Kubernetes 继续排名第一，但影响力逐年下降，让位于新兴领域的项目。
- Apache 基金会下由百度发起的开源实时数据仓库 Doris，近几年发展迅速，排名第二。
- 开放原子旗下的 OpenHarmony 项目，多个子仓库紧随其后，如果合并起来，将排名第一。

### 4.3 基金会旗下中国项目 OpenRank 趋势分析

<div align=center>
<img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_4/4-3.png" width="700px">
</div>
<center> 中国基金会项目 OpenRank 变化趋势 </center>

将各基金会旗下的中国项目单独拿出来看的话：

- Doris 和 OpenHarmony 发展速度最为抢眼。
- Milvus 向量数据库由于 AIGC 领域的需求，发展迅速。
- Flink、ShardingSphere 等项目稳中有降。

### 4.4 开放原子基金会旗下项目 OpenRank 趋势分析

<div align=center>
<img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_4/4-4.png" width="700px">
</div>
<center> 开放原子基金会项目 OpenRank 变化趋势 </center>

今年能够第一次看到开放原子旗下各项目的发展情况：

- 排名前三的分别是 OpenHarmony、openEuler 和 Anolis，代表了操作系统绝对的地位，特别是 OpenHarmony，作为国民级开源项目，发展最为迅速。
- 其他上榜项目发展非常平稳，期待后续能够在新的一年中发力。

## 五. 技术领域洞察

前端不断演进，追求交互与美感；云原生风靡，企业加速迁移；大数据助力智能决策，数据库创新驱动存储；人工智能蓬勃发展，实现自动化与预测；操作系统在新架构中持续演化。这些领域正成为科技前沿，吸引着创新者和投资，形成蓬勃的发展态势，故本章从影响力和活跃度两项指标对该六大领域展开技术领域洞察。

### 5.1 各技术领域近 5 年变化趋势

![5-1](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-1.png)

<center> 各子领域近 5 年 OpenRank 变化趋势 </center>

![5-2](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-2.png))
<center> 各子领域近 5 年活跃度变化趋势 </center>


从各子领域近 5 年的变化趋势来看，云原生优势明显，该领域下仓库数量相对其他领域较多，数据库作为重要和活跃的基础软件，排在前列，AI 由于这两年的火热增长迅速，操作系统领域虽然总量较低，但影响力依然逐年增加，体现了基础软件的性质，数量虽少，但价值巨大，与前端领域的影响力逐年缩小。

### 5.2 各领域 OpenRank 与活跃度 Top 10 项目近五年变化趋势

#### 5.2.1 云原生

![5-3](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-3.png)

<center> 云原生 OpenRank Top10 项目近五年变化趋势 </center>

![5-4](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-4.png)

<center> 云原生活跃度 Top10 项目近五年变化趋势 </center>

kubernetes 双指标下降明显，Grafana 影响力排名第一。llvm-project 增速明显，活跃度位居第一，llvm 是一个编译器框架，是一系列模块化、可重用的编译器以及工具链技术的集合，从近 3 年来看，该项目活跃度增长迅速，受到广大开发者的喜爱。

#### 5.2.2 人工智能

![5-5](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-5.png)

<center> 人工智能 OpenRank Top10 项目近五年变化趋势 </center>

![5-6](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-6.png)

<center> 人工智能活跃度 Top10 项目近五年变化趋势 </center>

可以看到 tensorflow 自 2020 年开始双指标严重下滑，掉出前 5，同样作为 AI 开发框架，pytorch 稳步增长，逐步拉开与其他项目的差距，值得一提的是，langchain 项目自 2022 年开源后，双指标便位居第二名，LangChain 是由 Harrison Chase 于 2022 年 10 月推出的开源软件项目。它已成为 LLM 开发中最受欢迎的框架之一。

#### 5.2.3 大数据

![5-7](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-7.png)

<center> 大数据 OpenRank Top10 项目近五年变化趋势 </center>

![5-8](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-8.png)

<center> 大数据活跃度 Top10 项目近五年变化趋势 </center>

可以看出，大数据领域双指标整体呈现上升趋势，其中，Kibana 和 Grafana 位居影响力和活跃度第二位，并且差距逐渐缩小，预测在未来 Grafana 会超越 Kibana，成为第一名。

Kibana 是一个开源的数据可视化和探索工具，它与 Elasticsearch 紧密结合。Kibana 可以用于查询、分析和可视化 Elasticsearch 中的数据。

Grafana 是一个开源的数据可视化工具，它可以用于监控和报告。Grafana 支持多种数据源，如 Prometheus、InfluxDB、Graphite 等。它具有强大的数据处理和可视化功能，可以用于创建各种类型的图表和仪表板。

#### 5.2.4 数据库

![5-9](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-9.png)

<center> 数据库 OpenRank Top10 项目近五年变化趋势 </center>

![5-10](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-10.png)

<center> 数据库活跃度 Top10 项目近五年变化趋势 </center>

ClickHouse 数据库双指标持续稳定增长，elasticsearch 热度回落，Doris 增速最快，活跃度指标接近第一名，预测该数据库双指标会在未来超越 ClickHouse。

ClickHouse 是俄罗斯的提索公司 Yandex 开源的 MPP 架构的分析引整，号称此事务数据库快 100-1000
倍，最大的特色是高性能的向量化执行引擎，而且功能丰富、可靠性高。

Apache Doris 是由百度贡献的开源 MPP 分析型数据库产品，分布式架构简洁，易于运维。

#### 5.2.5 前端

![5-11](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-11.png)

<center> 前端 OpenRank Top 10 项目近五年变化趋势 </center>

![5-12](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-12.png)


<center> 前端活跃度 Top 10 项目近五年变化趋势 </center>

Flutter 虽然双指标逐年下降，相较于 Next.js 仍具有明显的优势，Next.js 在 2023 年开始发力，上升明显，3-10 名项目竞争激烈，差距不大。

Flutter 是由 Google 开发和提供支持的框架。前端和全栈开发人员使用 Flutter 为具备单一代码库的多个平台构建应用程序的用户界面。

Next.js 是由 Vercel 创建的开源平台，它使用 Node.js 和 Babel 转译器构建，并设计为与 React 单页应用框架一起使用。另外，Next.js 还提供许多有用的功能，例如预览模式、快速开发者编译和静态导出。

#### 5.2.6 操作系统

![5-13](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-13.png)

<center> 操作系统 OpenRank Top 10 项目近五年变化趋势 </center>

![5-14](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_5/5-14.png)

<center> 操作系统活跃度 Top 10 项目近五年变化趋势 </center>

可以看到，OpenHarmony 项目下的多个仓库均处于前 10 的榜单中，本次洞察中结合了 Gitee 平台的数据，可以更直观的看到国产操作系统在各方面所处的优势（OpenHarmony 项目下有多个仓库，本次洞察以仓库的维度进行分析），SerenityOS 从 2021 年开始双指标稍显回落，仅次于 OpenHarmony. OpenEuler 也有着不错的表现。

### 5.3 2023 年各领域 OpenRank TOP 10 榜单

#### 5.3.1 云原生

| 序号  |          项目名称          | OpenRank |
|:---:|:----------------------:|:--------:|
|  1  |    grafana/grafana     | 7134.37  |
|  2  |   llvm/llvm-project    | 7049.62  |
|  3  | kubernetes/kubernetes  | 5374.14  |
|  4  | ClickHouse/ClickHouse  | 4941.99  |
|  5  |     cilium/cilium      | 3215.42  |
|  6  |       ceph/ceph        | 3172.49  |
|  7  |   keycloak/keycloak    | 3095.56  |
|  8  | gravitational/teleport | 3082.18  |
|  9  |    envoyproxy/envoy    | 2929.08  |
| 10  |  backstage/backstage   | 2903.39  |

#### 5.3.2 人工智能

| 序号  |                 项目名称                 | OpenRank |
|:---:|:------------------------------------:|:--------:|
|  1  |           pytorch/pytorch            | 10182.45 |
|  2  |        langchain-ai/langchain        | 6080.25  |
|  3  |         PaddlePaddle/Paddle          | 5408.62  |
|  4  |       huggingface/transformers       | 4422.84  |
|  5  | AUTOMATIC1111/stable-diffusion-webui |  3881.6  |
|  6  |       openvinotoolkit/openvino       | 3857.31  |
|  7  |        microsoft/onnxruntime         | 3006.75  |
|  8  |        tensorflow/tensorflow         | 2723.26  |
|  9  |     Significant-Gravitas/AutoGPT     | 2664.85  |
| 10  |         ggerganov/llama.cpp          |  2339.8  |

#### 5.3.3 大数据

| 序号 |       项目名称        | OpenRank |
|:----:|:---------------------:| -------- |
|  1   |    elastic/kibana     | 7601.04  |
|  2   |    grafana/grafana    | 7134.37  |
|  3   | ClickHouse/ClickHouse | 4941.99  |
|  4   |   airbytehq/airbyte   | 4658.86  |
|  5   |     apache/doris      | 4307.26  |
|  6   | elastic/elasticsearch | 3729.39  |
|  7   |    apache/airflow     | 3642.9   |
|  8   |  StarRocks/starrocks  | 3194.56  |
|  9   |     trinodb/trino     | 2703.4   |
|  10  |     apache/spark      | 2654.02  |

#### 5.3.4 数据库

| 序号  |         项目名称          | OpenRank  |
|:---:|:---------------------:|:---------:|
|  1  | ClickHouse/ClickHouse |  4941.99  |
|  2  |     apache/doris      |  4307.26  |
|  3  | elastic/elasticsearch |  3729.39  |
|  4  | cockroachdb/cockroach |  3443.7   |
|  5  |  StarRocks/starrocks  |  3194.56  |
|  6  |     trinodb/trino     |  2703.4   |
|  7  |     apache/spark      |  2654.02  |
|  8  |      ingcap/tidb      | 2200.38 ] |
|  9  |   milvus-io/milvus    |  2001.11  |
| 10  | yugabyte/yugabyte-db  |  1940.75  |

#### 5.3.5 前端

| 序号  |         项目名称          | OpenRank |
|:---:|:---------------------:|:--------:|
|  1  |    flutter/flutter    | 9361.81  |
|  2  |    vercel/next.js     | 6638.65  |
|  3  | appsmithorg/appsmith  | 3474.07  |
|  4  |       nuxt/nuxt       | 3387.23  |
|  5  | facebook/react-native | 3260.55  |
|  6  | ant-design/ant-design | 3053.25  |
|  7  |      nodejs/node      | 2736.37  |
|  8  |    angular/angular    | 2273.82  |
|  9  |   electron/electron   | 1773.31  |
| 10  |     denoland/deno     | 1654.01  |

#### 5.3.6 操作系统

| 序号 |              项目名称               | OpenRank |
|:----:|:-----------------------------------:|:--------:|
|  1   |          openharmony/docs           | 3277.69  |
|  2   |    openharmony/arkui_ace_engine     | 2818.09  |
|  3   |         SerenityOS/serenity         | 2257.68  |
|  4   |   openharmony/graphic_graphic_2d    |  1239.6  |
|  5   |           openeuler/docs            |  1206.9  |
|  6   |        openharmony/xts_acts         | 1186.06  |
|  7   | openharmony/arkcompiler_ets_runtime |  961.99  |
|  8   |    openharmony/interface_sdk-js     |  910.91  |
|  9   |           reactos/reactos           |  745.23  |
|  10  |            armbian/build            |  679.1   |

## 六. 开源项目洞察

2023 年，AI 大模型领域蓬勃发展，GPT-4、CLIP 等新一代模型崭露头角。全球企业竞相投入研发，推动语言理解、图像生成等前沿技术。行业呈现快速演进和探索的态势，为人工智能的广泛应用打开新篇章。与此同时，数据库领域迎来创新潮流。分布式数据库、时序数据库、图数据库等异彩纷呈，满足不同应用场景需求。云原生数据库蓬勃发展，提供灵活扩展与高可用性。本章节从不同项目类型的角度入手展开宏观洞察，对项目 Topic 进行统计分析，最后，分别对数据库与 AI 领域深入洞察。

### 6.1 项目类型

本小节选取了 GitHub 活跃度较高的 10000 个仓库进行统计分析

#### 6.1.1 不同项目类型数量比例

<img width="728" alt="6-1" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-1.png">




<center> 不同项目类型数量比例 </center>

- 组件框架类型（Libraries and Frameworks）占比最高（31.36%），充分反映了开源协同创新特点（站在巨人的肩膀上），也是最受开发者喜爱、乐于贡献的类型。
- 应用软件类型（Application Software）由于其实用性，占比仅次于组件框架类（24.34%），能够使得所有用户（不仅仅局限于开发者）在各个行业与领域使用开源软件。
- 内容资源类型（Non Software）也有不小的占比（23.17%），这体现了开源这一协同开发模式从软件延伸到全内容领域的趋势，包括文档、教育、艺术、硬件或其他非编程相关领域的创作和贡献。
- 软件工具类型（Software Tools）的占比为 18.9%，对于开发者这个专业群体来说，是个不容忽视的比例，能够使开发者专注于构建实际的应用程序和软件产品。
- 系统软件类型（System Software）占比最少（仅 2.3%），体现了基础软件的性质，数量虽少，但价值巨大，难度也是最高的。

#### 6.1.2 不同项目类型 OpenRank 加总比例

<img width="691" alt="6-2" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-2.png">

<center> 不同项目类型 OpenRank 加总比例 </center>

进一步，再从 OpenRank 影响力视角看这几个类别：

- 最大的变化，就是内容资源类型（Non Software）项目虽然有较高的活跃度，但其影响力相对较低；
- 而系统软件类型（System Software）虽然活跃度占比很少，但其影响力占比相对更多，软件工具类型（Software Tools）项目也有类似的现象；
- 组件框架类型和应用软件类型则没有太多变化，都是属于占比较多的类型。

#### 6.1.3 不同项目类型近 5 年 OpenRank 变化趋势

<img width="728" alt="6-3" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-3.png">
<center> 不同项目类型近 5 年 OpenRank 变化趋势 </center>

从上面的五年 OpenRank 演化图上可以看得出来，系统软件类型（System Software）的影响力也是逐年升高、而内容资源类型（Non Software）项目的影响力比例是在相对下降这样一个现象。

### 6.2 项目 Topic 分析

本小节选取了 GitHub 活跃度较高的 10000 个仓库，并获取仓库下的 Topic 标签进行深入洞察

#### 6.2.1 热门 topic

<img width="643" alt="6-4" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-4.png">

<center> 出现次数前十的 topic</center>

前十的主题涵盖了多个领域，反映了开源社区的广泛兴趣。其中，JavaScript、Hacktoberfest、Python 等主题代表了前沿技术、活跃社区活动和多用途编程语言的热点，突显了对于前端开发、开源贡献和多领域编程的关注。

#### 6.2.2 热门 topic 的仓库总 OpenRank 趋势

<center><img width="707" alt="6-5" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-5.png"></center>

<center> 出现次数前十的 topic 下仓库的 OpenRank 变化 (2019 - 2023)</center>

- Hacktoberfest 是一个每年十月举办的活动，旨在促进开源社区的发展。它由 DigitalOcean 与 GitHub 合作发起，其目标是鼓励更多人参与开源项目，为开源社区做出贡献。它的 OpenRank 高反映了人们对于开源项目、社区参与和贡献的热情。开发者们积极参与这个活动，通过向开源项目提交 Pull Request 的方式贡献，从而帮助提升了这个仓库的声誉和影响力。
- JavaScript 和 Python：这两项技术在过去几年中保持了相对稳定的趋势，没有出现大幅度的增长或下降。

### 6.3 数据库领域项目分析

本小节依据 [Database of Databases](https://dbdb.io/) 及 [DB-Engines Ranking](https://db-engines.com/en/ranking) 中公开的开源数据库信息，将该领域按数据库的存储结构及用途划分为 Relational, Key-value, Document, Search Engine, Wide Column, Time Series, Graph, Vector, Object Oriented, Hierarchical, RDF, Array, Event, Spatial, Native XML, Multivalue，Content, Network 等 18 个子类，收集并分析其在 Github 上的相应数据库开源项目的协作日志数据，详细洞察结果如下：

#### 6.3.1 数据库领域各子领域 2023 年 OpenRank 和活跃度榜单

**数据库子领域 OpenRank 榜单**

| 排名  |      子领域名称      | openrank |
|:---:|:---------------:|:--------:|
|  1  |   Relational    | 58092.36 |
|  2  |    Key-value    | 21834.08 |
|  3  |    Document     | 17264.93 |
|  4  |  Search Engine  | 8093.77  |
|  5  |   Wide Column   | 7896.43  |
|  6  |   Time Series   | 7813.54  |
|  7  |      Graph      | 5196.52  |
|  8  |     Vector      | 4965.41  |
|  9  | Object Oriented | 3104.07  |
| 10  |  Hierarchical   |  1355.4  |
| 11  |       RDF       |  592.68  |
| 12  |      Array      |  383.95  |
| 13  |      Event      |  256.59  |
| 14  |     Spatial     |  224.05  |
| 15  |   Native XML    |  209.51  |
| 16  |   Multivalue    |  15.89   |
| 17  |     Content     |   3.43   |

**数据库子领域活跃度榜单**

| 排名  |      子领域名称      | activity  |
|:---:|:---------------:|:---------:|
|  1  |   Relational    | 161025.44 |
|  2  |    Key-value    | 62501.64  |
|  3  |    Document     | 49400.11  |
|  4  |  Search Engine  | 23799.87  |
|  5  |   Time Series   | 22077.57  |
|  6  |   Wide Column   | 21292.17  |
|  7  |     Vector      | 16395.88  |
|  8  |      Graph      | 14947.43  |
|  9  | Object Oriented |  8418.14  |
| 10  |  Hierarchical   |  3406.55  |
| 11  |       RDF       |  1701.67  |
| 12  |      Array      |  1280.14  |
| 13  |   Native XML    |  737.94   |
| 14  |     Spatial     |  680.79   |
| 15  |      Event      |  654.42   |
| 16  |     Content     |   33.94   |
| 17  |   Multivalue    |   12.68   |

从数据库领域各子领域 2023 年的 OpenRank 和活跃度排行可以看出：

- Relational, Key-value, Document 在以上两项指标中都稳据前三，前三名的数据库子领域的两项指标累计均占数据库领域两项指标的 70% 以上；
- Relational 的各项指标超过了第二至第五名的总和，其两项指标均占数据库领域两项指标的 40% 以上，是一个超大子类。

#### 6.3.2 数据库领域各子领域下项目近五年变化趋势

![6-6](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-6.png)

<center> 数据库领域各子领域 2019 - 2023 年 OpenRank 变化趋势 </center>

![6-7](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-7.png)

<center> 数据库领域各子领域 2019 - 2023 年 Activity 变化趋势 </center>

从数据库领域各子领域项目近 5 年 OpenRank 变化趋势及 Activity 变化趋势上可以看出：

- 近 5 年，Relational, Key-value, Document 在以上两项指标中都持续稳据前三；
- Search Engine, Wide Column, Time Series, Graph, Vector, Object Oriented 则占据了第四到第九名，且两项指标均有逐渐上升的趋势；
- 从 Bumps chart 的排名变化可以看出 Search Engine 和 Vector 的 Activity 增速相对较快，Search Engine 的 OpenRank 也提升了两个名次，已经跃居第四大子类，而 Vector 子类还有未爆发的 OpenRank 潜力，其 OpenRank 值已经与 Graph 子类非常接近了；大模型带来的影响目前仍未减退，预计 2024 年 Vector 子类将超过 Graph 子类。


### 6.4 生成式 AI 领域项目分析

本小节参考 [Generative AI Open Source (GenOS) Index](https://www.decibel.vc/articles/launching-the-generative-ai-open-source-genos-index) 中的生成式 AI 领域开源项目，将其分为 tool、model、application 和 infrastructure 四个子类展开分析, 详细洞察结果如下：

#### 6.4.1 生成 AI 各子领域近 5 年增长趋势

<img width="712" alt="6-8" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-8.png">


<center> 生成式 AI 各子领域 2019 - 2023 年 OpenRank 变化趋势 </center>

<img width="722" alt="6-9" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-9.png">

<center> 生成式 AI 各子领域 2019 - 2023 年 Activity 变化趋势 </center>

- 根据类别（模型类、工具类、应用类）划分的分类分析，在活跃度和影响力上总体趋势一致；
- 工具类 AIGC 开源项目的影响力和活跃度均高于模型类和应用类；
- 工具类项目影响力自 2021 年开始增长迅速，在 2023 年超过模型类，整体呈现上升趋势，代表着 2023 年是 AIGC 创新应用开发的大爆发之年，预计后续还会继续走高，从而也同时带动应用类项目的大发展。

#### 6.4.2 生成式 AI 领域项目 OpenRank 和活跃度 Top 10 变化趋势

<img width="716" alt="6-10" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-10.png">

<center> 生成式 AI 领域 OpenRank Top 10 项目近 5 年变化趋势 </center>

<img width="699" alt="6-11" src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_6/6-11.png">

<center> 生成式 AI 领域活跃度 Top 10 项目近  5 年变化趋势 </center>

- langchain 影响力和活跃度双排名第一，备受开发者的关注；
- transformers 作为该领域前几年一直的王者，只到 2023 年才被超越，充分展示了其 AIGC 领域奠基性的地位，该项目在学术领域与开源领域影响力均表现不俗；
- stable-diffusion-webui 也是备受开发者关注的 AIGC 工具，尤其在活跃度这块超越 transformers 稳居第二，2024 年影响力超越 transformers 也是大概率事件。
- 部分 AIGC 项目在 2023 年开源后影响力与活跃度就迅速增长并位于 Top 10 榜单，展示了 AIGC 领域这种极端快速的变化特点。

#### 6.4.3 2023 年生成式 AI 领域项目 OpenRank 和活跃度 Top 10 榜单

**生成式 AI 领域OpenRank Top 10 项目榜单**

| 排名  |                 项目名称                 | openrank |
|:---:|:------------------------------------:|:--------:|
|  1  |        langchain-ai/langchain        | 6080.25  |
|  2  |       huggingface/transformers       | 4422.84  |
|  3  | AUTOMATIC1111/stable-diffusion-webui |  3881.6  |
|  4  |     Significant-Gravitas/AutoGPT     | 2664.85  |
|  5  |         ggerganov/llama.cpp          |  2339.8  |
|  6  |   oobabooga/text-generation-webui    |  2242.5  |
|  7  |           milvus-io/milvus           | 2001.11  |
|  8  |        run-llama/llama_index         | 1913.01  |
|  9  |       facebookincubator/velox        | 1589.53  |
| 10  |          invoke-ai/InvokeAI          | 1571.45  |

**生成式 AI 领域活跃度 Top 10 项目榜单**

| 排名  |                 项目名称                 | activity |
|:---:|:------------------------------------:|:--------:|
|  1  |        langchain-ai/langchain        | 22563.04 |
|  2  | AUTOMATIC1111/stable-diffusion-webui | 13933.03 |
|  3  |       huggingface/transformers       | 13618.11 |
|  4  |     Significant-Gravitas/AutoGPT     | 10961.81 |
|  5  |   cobabooga/text-generation-webui    | 8597.33  |
|  6  |         ggerganov/llama.cpp          | 8108.62  |
|  7  |        run-llama/llama_index         | 7532.47  |
|  8  |           milvus-io/milvus           | 6488.35  |
|  9  |       facebookincubator/velox        | 4923.05  |
| 10  |  chatchat-space/Langchain-Chatchat   | 4477.63  |

## 七. 开发者洞察

### 7.1 开发者的地区分布

**GitHub 活跃用户的经纬度图**

![7-1.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-1.png)
<center> 2023 GitHub 活跃用户的经纬度图 </center>

地图上可以直观地感受 GitHub 用户大致的地理位置分布。在人口数量众多且互联网发展较快的地区例如中国沿海地区、欧洲地区、美国、印度、巴西东南沿海地区有着最为密集的 GitHub 用户分布，在其他居住人口少或者互联网较不发达的地区则相对稀疏。

**GitHub 活跃用户国家 / 地区分布图**

![7-2.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-2.png)

<center>2023 GitHub 活跃用户国家 / 地区分布图 </center>

可以发现美国的人数最多，中国、印度和巴西则紧随其后，其他拥有一定人口数量和经济水平的国家例如加拿大、澳大利亚以及一些欧洲国家也拥有着较多的 GitHub 用户。

**OpenRank加权后的中国活跃 GitHub 用户经纬度图**

![7-3.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-3.png)

<center> OpenRank 加权后的 2023 中国活跃 GitHub用户经纬度分布图</center>

地图上可以直观地看到感受到中国高OpenRank的GitHub用户的分布，大部分集中在北京以及长三角、珠三角地区，同时东部地区的用户Openrank分布要显著多于西部地区。

**中国活跃 GitHub 用户分布图**

![7-4.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-4.png)

<center>2023 中国活跃 GitHub 用户分布图 </center>

可以发现北京拥有着国内最多的 GitHub 用户，其次是上海、广州和浙江。中国的大部分 GitHub 活跃用户都在东部沿海地区，中部的一些省份例如陕西、湖南、湖北也有拥有不少的活跃用户，值得注意的是四川是除了沿海地区以外拥有最多 GitHub 活跃用户的省份。

### 7.2 开发者工作时间分析

本小节对 GitHub 及 Gitee 开发者工作时间进行分析。本节时间默认使用 UTC 区时，相比东八区滞后 8 小时。数据默认使用 min-max 方法放缩到 [1-10] 区间，时区图中圆点面积越大代表数值越高。

#### 7.2.1 全域开发者工作时间分布

**GitHub 全域开发者工作时间分布**

统计 GitHub 全域开发者工作时间，可以看出 GitHub 开发者工作时长分布在 6 时到 21 时更普遍，12 点更为集中，可能是受到定时任务的影响。周六周日相对更不活跃。

![7-5.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-5.png)

<center>Github 全域开发者 2023 年工作时间打点图</center>

**Gitee 全域开发者工作时间分布**

![7-6.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-6.png)

<center>Gitee 全域开发者 2023 年工作时间打点图</center>

可以明显看出，Gitee 数据更符合东八区作息规律。

**除去机器人的全域开发者时间分布**

![7-7.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-7.png)

<center>除去机器人的全域开发者 2023 年工作时间打点图</center>

去掉机器人数据后发现开发者时间分布集中在 6 时 - 21 时这个区间更为普遍，分布更加均匀。

#### 7.2.2 项目工作时间分布

以下为 2023 年度中国仓库 OpenRank 前四名与全球 GitHub 仓库 OpenRank 前四名的工作时间分布对比。

**全球 GitHub 仓库 OpenRank 前四名工作时间分布**

1. NixOS/nixpkgs

![7-8.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-8.png)

<center>NixOS/nixpkgs 2023 年工作时间打点图</center>

2. home-assistant/core

![7-9.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-9.png)

<center>home-assistant/core 2023 年工作时间打点图</center>

3. microsoft/vscode

![7-10.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-10.png)

<center>microsoft/vscode 2023 年工作时间打点图</center>

4. MicrosoftDocs/azure-docs

![7-11.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-11.png)

<center>MicrosoftDocs/azure-docss 2023 年工作时间打点图</center>

**中国仓库 OpenRank 前四名工作时间分布**

1. openHarmon

![7-12.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-12.png)

<center>openHarmon 2023 年工作时间打点图</center>

2. openEuler

![7-13.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-13.png)

<center>openEuler 2023 年工作时间打点图</center>

3. PaddlePaddle

![7-14.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-14.png)

<center>PaddlePaddle 2023 年工作时间打点图</center>

4. MindSpore

![7-15.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-15.png)

<center>MindSpore 2023 年工作时间打点图</center>

### 7.3 开发者角色分析

本部分基于 GitHub 数据进行分析。我们基于 GitHub 用户在开源仓库中所触发的事件将 GitHub 用户分为探索者、参与者、贡献者、提交者(Committer)四个角色，四种角色定义为：

| 角色  | 定义                            | 含义                   |
|-----|-------------------------------|----------------------|
| 探索者 | 对某一项目进行 star 的用户              | 表示用户对该项目有一定的兴趣       |
| 参与者 | 对某项目有过 Issue 或者 Comment 行为的用户 | 表示用户参与该项目            |
| 贡献者（Contributer） | 对某项目中有 PullRequest 的用户        | 表示用户对项目 CodeBase 有贡献 |
| 提交者（Committer） | 参与 PR-review 的用户              | 表示用户对项目有深度贡献         |

一般情况下，四种关系层层递进，结构如下图所示。基于所定义的角色体系，我们从角色数量、时间变化、开发者角色演化三个视角对 GitHub 全域项目中 OpenRank 排名前十的项目进行量化。项目排名见第二章。

![7-16.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-16.png)

#### 7.3.1 各角色数量分布

| 仓库名                                      | 探索者   | 参与者   | 贡献者  | 提交者  |
|------------------------------------------|-------|-------|------|------|
| NixOS/nixpkgs                            | 6244  | 3381  | 3074 | 2638 |
| home-assistant/core                      | 17777 | 9116  | 1230 | 905  |
| microsoft/vscode                         | 20113 | 16027 | 525  | 339  |
| MicrosoftDocs/azure-docs                 | 8939  | 2282  | 1591 | 610  |
| pytorch/pytorch                          | 13237 | 6391  | 1230 | 685  |
| godotengine/godot                        | 23426 | 7203  | 1020 | 569  |
| flutter/flutter                          | 14056 | 11101 | 637  | 334  |
| odoo/odoo                                | 5078  | 1841  | 930  | 570  |
| digitalinnovationone/dio-lab-open-source | 3619  | 907   | 504  | 40   |
| microsoft/winget-pkgs                    | 1852  | 1395  | 1384 | 286  |


![7-17.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-17.png)


<center> 开发者角色分布图 </center>


- 探索者的数量普遍较高，这表明这些项目受到了广泛的关注和支持。godotengine/godot、microsoft/vscode、home-assistant/core 探索者数量远超其他项目，说明了这三个项目受到广泛关注。
- microsoft/vscode 是参与者与贡献者人数差距最大的项目，而 microsoft/winget-pkgs 二者差距最小
- 提交者（Committer）角色方面，NixOS/nixpkgs 项目提交者人数最多，有 2638 人；digitalinnovationone/dio-lab-open-source 项目提交者数最少

#### 7.3.2 2023 年各角色新增情况

角色新增的统计口径为：某用户在 2023 年之前不是 R 角色，在 2023 年成为 R 角色，则为 R 角色有效新增数。

例如：A 2021 年给 B 项目提交了 PR，但是从未参与 Code Review 工作。2023 年 A review 了 B 项目中的 PR，则称 A 为新增提交者。

以下是详细角色新增情况。

![7-18.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-18.png)

<center>2023 年开源社区角色新增图 </center>

| 仓库名                                      | 新增提交者 | 新增贡献者 | 新增参与者 | 新增探索者 |
|------------------------------------------|-------|-------|-------|-------|
| NixOS/nixpkgs                            | 1226  | 1622  | 1591  | 3027  |
| home-assistant/core                      | 538   | 808   | 4640  | 8998  |
| microsoft/vscode                         | 263   | 394   | 10216 | 15746 |
| MicrosoftDocs/azure-docs                 | 352   | 1420  | 3913  | 1579  |
| pytorch/pytorch                          | 391   | 802   | 2083  | 13016 |
| godotengine/godot                        | 386   | 708   | 2834  | 22996 |
| flutter/flutter                          | 184   | 455   | 3954  | 13579 |
| odoo/odoo                                | 244   | 453   | 472   | 4991  |
| digitalinnovationone/dio-lab-open-source | 40    | 3611  | 732   | 504   |
| microsoft/winget-pkgs                    | 231   | 957   | 485   | 1373  |


**结果分析**

- 最高新增 Stars 的仓库是 godotengine/godot，达到了 22996。这与该仓库创时间不长有关且影响力大有关。digitalinnovationone/dio-lab-open-source 和 microsoft/winget-pkgs 的新增探索者最少，分别为 504 和 1373。
- 最高新增参与者的仓库是 microsoft/vscode，达到了 10216。digitalinnovationone/dio-lab-open-source 的新增 Issues 最少，为 732。
- 最高新增开发者的仓库是 NixOS/nixpkgs，达到了 1622。
- 最高新增维护者的仓库同样是 NixOS/nixpkgs，达到了 1226。

#### 7.3.3 开发者演化视角

开发者演化过程定义为一个开源社区中，有多少角色转向其他角色。本报告中我们只度量有某一角色转向更深层次角色的开发者。例如某用户 2023 年以前是参与者 ，到了 2023 年该用户提出了自己第一 PR ，从参与者转变为贡献者，则为参与者者转变成贡献者。

![7-19.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-19.png)

<center> 开发者角色演化图 </center>


|                  仓库名                  | 贡献者 -> 提交者 | 参与者 -> 贡献者 | 探索者 -> 参与者 |
|:----------------------------------------:|:----------------:|:----------------:|:----------------:|
|              NixOS/nixpkgs               |       254        |       122        |       168        |
|           home-assistant/core            |        70        |       113        |       134        |
|             microsoft/vscode             |        16        |        70        |       287        |
|         MicrosoftDocs/azure-docs         |       129        |       169        |        21        |
|             pytorch/pytorch              |        60        |        53        |       187        |
|            godotengine/godot             |        63        |       131        |       330        |
|             flutter/flutter              |        31        |        91        |       419        |
|                odoo/odoo                 |        55        |        19        |        32        |
| digitalinnovationone/dio-lab-open-source |        0         |        0         |        0         |
|          microsoft/winget-pkgs           |        49        |        11        |        18        |

**结果分析**

- 在各社区中，我们可以观察到典型的漏斗模型，即从探索者到参与者，再到贡献者和提交者的演化路径。以 godotengine/godot 为例，有 330 名贡献者成功演化为提交者，131 名参与者演化为贡献者，而 63 名探索者演化为参与者。这一趋势在其他社区也得到了体现，符合社区成员从初次探索到深度参与的一般发展过程。
- 在一些社区中，例如 NixOS/nixpkgs，我们观察到贡献者向提交者的演化数量相对较大。在该社区中，254名贡献者成功演化为提交者，这可能代表相对高的代码审查需求，鼓励更多的贡献者深度参与到维护工作中。这种机制可能有助于提高社区代码的质量和稳定性。
- 在一些社区，例如 flutter/flutter 和 godotengine/godot，我们观察到相对较多的探索者成功转化为参与者。在 flutter/flutter中，419 名探索者演化为参与者，而在 godotengine/godot 中，有 330 名探索者变为参与者。
- digitalinnovationone/dio-lab-open-source 项目由于在 2023 年创建，并没有数据。

### 7.4 机器人账号分析

机器人（bot）自动化是开源协作平台中的重要贡献力量，本部分分析了 2023 年全年近 6 亿条仓库事件，涉及 770 万开源仓库，以及 1200
多个机器人账号。

#### 7.4.1 机器人活跃数据分析

<div align="center">
    <img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-21.png" alt="7-21" width="400px"/>   
    <img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-20.png" alt="7-20" width="300px"/>
</div>

<center>机器人事件数趋势（左） 2023 年机器人事件数比例（右）</center>


分析 2015 年至 2023 年的机器人活动数据，部分观察如下：

机器人事件数量从 4,217,635 个增长至 304,257,084 个，增长趋势显著 从 2019 年起，机器人事件数量急剧上升，尤其是在 GitHub 平台 2019 年至 2021 年间，GitHub 上机器人账号活动量呈现爆炸式增长，增长是由于 GitHub 自动化、持续集成 / 持续部署（CI/CD）工具的普及和完善有关
尽管机器人账号数量不多，但每个机器人服务于多个仓库，展现出高效率和广泛影响力

#### 7.4.2 机器人事件类型分析

![7-22.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-22.png)

<center> 年度增长率（%）和 GitHub 事件计数的数量差异（2022 vs 2023）</center>

这幅图表展示了 2022 年与 2023 年间 GitHub 各事件类型的数量变化及其增长率。通过对比这两年的数据，我们可以洞察机器人账号在开发流程中的使用趋势：

- 代码推送的主导地位：PushEvent 在机器人账号活动中占据主导地位，尤其在 2023 年数量显著上升，表明机器人账号在代码维护和更新方面扮演着重要角色。
- 项目创建活动的变化：CreateEven 在 2022 年非常活跃，但在 2023 年有所减少，这可能表明机器人账号在新项目创建方面的活动有所下降。
- 代码审查和协作的重要性：PullRequestEvent 和 IssueCommentEvent 数量在两年中都较高，显示机器人账号在代码审查和问题讨论中的积极参与。
- 活动类型的变化：DeleteEvent 在 2023 年相比 2022 年有所减少，而 ReleaseEvent 则有所增加，这反映出机器人账号在项目生命周期管理中的不同聚焦点。
- 注释相关事件的增加：CommitCommentEvent 和 PullRequestReviewCommentEvent 在 2023 年有所增加，表明机器人账号在代码审查过程中的讨论和反馈越来越活跃。
- 机器人账号的特定用途：较少见的事件类型如 GollumEvent、MemberEvent、PublicEvent 和WatchEvent 在数量上相对较低，表明机器人账号主要用于特定的自动化任务，而在项目管理或社交互动方面的参与较少。



#### 7.4.3 机器人账号工作时间分布

类似开发者工作时间分布，可以对机器人的工作时间数据进行分析。

![7-23.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-23.png)

<center> 机器人账号工作时间分布 </center>

- 机器人账号的工作时间分布主要集中在凌晨 0 点至 1 点和中午 12 点至 13 点
- 根据全域开发者时区可以推测大多数自动化流程在凌晨和中午时段较为活跃
- 机器人工作活跃时间与工作日和非工作日相关度较小，大多数自动化协作任务为定时任务，较少的自动化任务与对贡献者的活动事件产生响应有关。

##### 7.4.4 Github 协作机器人事件数量排行榜

![7-24.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_7/7-24.png)

<center>2023 年 Github 协作机器人事件数量排行榜</center>


## 八. 案例分析

### openEuler 社区案例分析

在 2023 年，Gitee 数据首次融入 OpenDigger 社区，使得 Gitee 上的项目也参与到了 OpenRank 的计算中。在这一年，openEuler 社区以 16728 的 OpenRank 值超越 PaddlePaddle，成为仅次于 openHarmony 的中国第二大开源社区。

在 2023 年，openEuler 社区吸引了 3941 名开发者参与 Issue 或 PR 的协作讨论，其中有 1934 名贡献者成功为 openEuler 社区的仓库贡献并合入了至少一个 PR。尤其值得一提的是，openEuler 社区在 2023 年初发起了文档捉虫活动，并在社区文档官网中嵌入了与 Gitee 打通的交互式页面贡献机制。这一机制使得开发者在阅读文档时发现错误时，能够在官网上直接修改并一键发起 Gitee 轻量级
PR，无需跳转到 Gitee 平台或进行 Git 操作。这一创新的机制带来的数据变化令人瞩目，openeuler/docs 仓库在 2023 年合入了 7764 个 PR，其中 74% 的 PR 是通过官网页面直接提交的。这一机制的上线也显著提升了每月平均活跃贡献者数量（从 30 人提升到 80 人）和每月平均合入
PR 数量（从 116 个提升到 722 个）。

另一个值得关注的项目是 openeuler/mugen，作为 openEuler 社区的测试框架项目，该项目活跃度极高。在 2023 年，有 138
位开发者参与到项目讨论和贡献中，其中 95 位开发者成功合入了 PR。该项目在整个 openEuler 社区中的 OpenRank 排名第三，仅次于
openeuler/docs 文档仓库和 openeuler/kernel 内核仓库。优秀的测试框架为开发者提供了快速编写和运行测试用例的便利，可以帮助他们验证贡献代码的正确性和有效性，极大降低了后续贡献的流程成本。

综上所述，openEuler 社区之所以取得较高的 OpenRank
值，并非偶然。他们不仅为高频低门槛的文档贡献设计了几乎零流程成本的交互式贡献机制，还提供了优秀的测试框架，助力贡献者在贡献代码的同时快速验证其正确性。这些优秀的开发者体验优化是各个开源社区值得学习和推广的范例。

### 其他中国开发者贡献的顶级仓库列表

使用目前已采集的近千万开发者账号的详细信息，其中包含了中国开发者账号近 20 万，通过分析这 20 万开发者在 2023 年 OpenRank 贡献度情况，获得中国开发者贡献仓库总榜如下：

![8-1.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_8/8-1.png)

<center>Github 中国开发者贡献仓库排行榜（Top 30）</center>

大部分项目是在 OpenRank 大榜中有体现的，比较有趣的项目包括：

- [NixOS/nixpkgs](https://github.com/NixOS/nixpkgs)：这也是一个国际顶级项目，一个新操作系统的包管理工具，虽然大部分更新都是包信息的更新，但也意味着这个操作系统生态本身的繁荣。

- [intel-analytics/BigDL](https://github.com/intel-analytics/BigDL)：将 LLM 运行在 Intel XPU 上的运行库，这个仓库 17 年就建立了，到 21 年底时近乎已经废弃，但随着 22 年 LLM 崛起，这个仓库起死回生，目前保持每月 50 人左右的活跃规模。

 <img src="https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_8/8-2.png" alt="8-2" width="400px"/>

> 以上截图来自 [HyperCRX](https://github.com/hypertrons/hypertrons-crx)
  
- [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)：思源笔记，一款隐私优先的国产开源知识管理工具，支持双向知识块级引用，保持每月百人的社区活跃规模。支持订阅商业化，价格非常亲民。

- [baidu/amis](https://github.com/baidu/amis)：百度开源的低代码页面生成框架，低代码项目近年来非常火爆，例如阿里开源的 LowcodeEngine，鸿蒙生态的 DevEco Studio 等为开发者低代码快速开发应用提供了巨大便利。

- [cocos/cocos-engine](https://github.com/cocos/cocos-engine)：国产的游戏引擎佼佼者，随着元宇宙概念的兴起，godot 等游戏引擎成为全球重要的顶级开源项目，而国产的游戏引擎 cocos/cocos-engine 也在国内有着优秀的表现。

- [MaaAssistantArknights/MaaAssistantArknights](https://github.com/MaaAssistantArknights/MaaAssistantArknights) 这个项目不太正经，但很有意思，是明日方舟这款游戏的一个自动化刷日常任务的脚本助手项目，可以在手机模拟器上进行游戏日常任务的自动化执行。这个仓库超过 10k star，每月稳定有 300 多人活跃，非常惊人的活跃度。而且项目完全开源免费，社区维护，且支持所有桌面平台。

![8-3.png](https://raw.githubusercontent.com/wj23027/2023-China-Open-Source-Report/add_pic/public/image/data/chapter_8/8-3.png)